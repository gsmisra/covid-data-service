const csv = require('csvtojson');
const fs = require('fs');
let csvFilePath = './new_case_data.csv';

csv().fromFile(csvFilePath)
.then((jsonObj) => {
    console.log(jsonObj);
    fs.writeFile('./newCaseJson.json', jsonObj, (err) => {
        if(err) {
            console.log(`Unable to read file!`);
        }
    })
})