function renderResults(response, rawResponse) {
    var results = document.querySelector('#results');

    if(!response || response.error) {
        results.appendChild(document.createTextNode('Error trying to fetch representative data'));
        return;
    }

    console.log(response);

    var divisions = response.divisions,
        offices = response.offices,
        officials = response.officials,
        state = response.normalizedInput.state,
        zip = response.normalizedInput.zip,
        normalizedAddress = response.normalizedInput.line1 + ' ' + response.normalizedInput.city + ', ' +
        response.normalizedInput.state + ' ' +
        response.normalizedInput.zip;


    // function getDivisions() {
    //     for (var key in divisions) {
    //         var divisionName = divisions[key].name;
    //     }
    // }

    function outputContent(data) {
        var source = document.querySelector('#office-block-template').innerHTML,
            template = Handlebars.compile(source),
            markup = template(data);

        results.innerHTML = markup;
    }

    function count(obj) {
        var count = 0;

        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
            ++count;
        }

        return count;
    }

    // build object for each office
    function buildOffice() {
        var queriedOffices = {};
        // set up main object
        queriedOffices = {
            offices: [],
            divisions: [],
        }

        // get each division and set up array for offices
        for (var key in divisions) {
            var divisionObj = {};

            divisionObj = {
                divisionName: divisions[key].name,
                divisionFormal: key,
                divisionOffices: [],
            }

            queriedOffices['divisions'].push(divisionObj);
        }

        // create office level data
        for (var i = 0; i < offices.length; i++) {
            var officeObj = {};

            officeObj = {
                officeName: offices[i].name,
                officeLevel: offices[i].levels,
                officeRoles: offices[i].roles,
                officeOfficials: offices[i].officialIndices,
                officials: [],
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

            for (var key in divisions) {
                // assign div name to office object
                if( divisions[key].officeIndices.includes(i) ) {
                    officeObj['division'] = divisions[key].name;
                }
            }

            // add offices to offices object
            queriedOffices.offices[i] = officeObj;
        }

        // loop through divisions and add offices
        for (var d = 0; d < queriedOffices.divisions.length; d++) {
            var division = queriedOffices.divisions[d].divisionName;

            for (var f = 0; f < queriedOffices.offices.length; f++) {
                if( queriedOffices.divisions[d].divisionName === queriedOffices.offices[f].division ) {
                    queriedOffices.divisions[d].divisionOffices.push(queriedOffices.offices[f]);
                }
            }
        }

        console.log(queriedOffices);

        outputContent(queriedOffices);
    }

    buildOffice();
}
