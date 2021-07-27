const express = require('express');
const app = express();
const newCasesRouter = require('./routes/covid-cases-rout');
const fs = require('fs');
let csvFilePath = 'data/new_case_data.csv';
const csv = require('csvtojson');

/* app.use((req, res, next) => {
    csv().fromFile(csvFilePath)
    .then((jsonObj) => { 

        fs.writeFile('data/newCaseJson.json', JSON.stringify(jsonObj), (err) => {
            if(err) { 
                    console.log('Unable to read data csv!');
                }
            });
        });

    next();
});
 */

app.use('/api/new-covid-data', newCasesRouter);


/* Global error handller */
app.all('*', (req, res,next) => {
    res.status(400).json({
        status: 'fail',
        message: `Page not found for path ${req.originalUrl}`
    });
})


module.exports = app;