function renderResults(response, rawResponse) {
    var el = document.getElementById('results');

    if(!response || response.error) {
        el.appendChild(document.createTextNode('Error trying to fetch representative data'));
        return;
    }

    // queried address
    var normalizedAddress = response.normalizedInput.line1 + ' ' +
        response.normalizedInput.city + ', ' +
        response.normalizedInput.state + ' ' +
        response.normalizedInput.zip;



    var divisions = response.divisions,
        offices = response.offices,
        officials = response.officials;


    // build object for each office
    function office() {
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
                    //officeObj['officials'] = officialsObj;
                    officeObj.officials.push(officialsObj);
                }
            }

            console.log(officeObj);
        }
    }

    office();

}

function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}


function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
