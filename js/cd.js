function renderResults(response, rawResponse) {
    var results = document.querySelector('#results');

    if(!response || response.error) {
        results.appendChild(document.createTextNode('Error trying to fetch representative data'));
        return;
    }

    var divisions = response.divisions,
        offices = response.offices,
        officials = response.officials,
        state = response.normalizedInput.state,
        zip = response.normalizedInput.zip,
        normalizedAddress = response.normalizedInput.line1 + ' ' + response.normalizedInput.city + ', ' +
        response.normalizedInput.state + ' ' +
        response.normalizedInput.zip;


    function getDivisions() {
        for (var key in divisions) {
            var divisionName = divisions[key].name;
        }
    }

    function outputContent(data) {
        var source = document.querySelector('#office-block-template').innerHTML,
            template = Handlebars.compile(source),
            markup = template(data);
        console.log(data);

        results.innerHTML = markup;
    }

    // build object for each office
    function buildOffice() {
        var queriedOffices = {};

        queriedOffices = {
            offices: [],
        }

        for (var i = 0; i < offices.length; i++) {
            var officeObj = {};

            officeObj = {
                officeName: offices[i].name,
                officeLevel: offices[i].levels,
                officeRoles: offices[i].roles,
                officeOfficials: offices[i].officialIndices,
                officials: [],
            }

            // check division and assign to office
            for (var key in divisions) {
                if( divisions[key].officeIndices.includes(i) ) {
                    officeObj['division'] = divisions[key].name;
                }
            }

            // loop through officials and assign to office object
            for (var r = 0; r < officials.length; r++) {
                var officialObj = {};

                officialsObj = {
                    officialIndex: r,
                    officialName: officials[r].name,
                    officialParty: officials[r].party,
                    officialImg: officials[r].photoUrl,
                    officialUrls: officials[r].urls,
                    officialPhones: officials[r].phones,
                    officialChannels: officials[r].channels,
                }

                if( offices[i].officialIndices.includes(r) ) {
                    officeObj.officials.push(officialsObj);
                }
            }
            queriedOffices.offices[i] = officeObj;
        }

        outputContent(queriedOffices);
    }

    buildOffice();
}
