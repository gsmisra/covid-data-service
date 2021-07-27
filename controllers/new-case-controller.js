const NewCaseModel = require('../model/covid-data-model');
const csv = require('csvtojson');
let csvFilePath = 'data/new_case_data.csv';



exports.getAllCases = async (req, res) => {
    /* csv().fromFile(csvFilePath)
    .then((jsonObj) => { 
        res.status(200).json({
            status: 'success',
            numberOfRecords: jsonObj.length,
            message: jsonObj
        });
    }); */

    const allCases = await NewCaseModel.find({});
    res.status(200).json({
        status:'OK',
        cases: {
            data: [allCases]
        }
    });
}

exports.addCase = async (req, res) => {
    try{
        const newCase = await NewCaseModel.create(req.body);
        console.log(newCase);
        res.status(201).json({
            status: 'success',
            message: 'New case data added to Db',
            case: {
                details: newCase
            }
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: 'Unable to load new case to Db',
            case: {
                details: req.body
            }
        });
    }
}


//localhost:3000/api/new-covid-data/find?name=Afganistan
exports.getCaseDetails = async (req, res) => {
    try{
        console.log('>>>>>>>>>>>>>>>>>>>>>>>')
        let caseDetailQuery = NewCaseModel.find({ 'Country_Region': { '$regex': req.query.Country_Region } });
        let caseDetail = await caseDetailQuery;
            
        res.status(200).json({
            status: 'ok',
            query: req.query.Country_Region,
            data: caseDetail
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            query: req.query.Country_Region,
            err: err.message
        });
    }

    
}