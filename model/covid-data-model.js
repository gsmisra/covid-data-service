const mongoose = require('mongoose');


const casesSchema = new mongoose.Schema({
    FIPS:{
        type: String,
        required: false
    },
    Admin2: {
        type: String,
        required: false
    },
    Province_State: {
        type: String,
        required: [true, `Province / State cannot be empty`]
    },
    Country_Region: {
        type: String,
        required: [true, `Country / Region cannot be empty`]
    },
    Last_Update:{
        type: String
    },
    Lat:{
        type: String
    },
    Long_: {
        type: String
    },
    Confirmed:{
        type: String
    },
    Deaths:{
        type: String
    },
    Recovered:{
        type: String
    },
    Active:{
        type: String
    },
    Combined_Key:{
        type: String
    },
    Incident_Rate:{
        type: String
    },
    Case_Fatality_Ratio:{
        type: String
    }
});


const NewCaseModel = mongoose.model('NewCaseModel', casesSchema);
module.exports = NewCaseModel;