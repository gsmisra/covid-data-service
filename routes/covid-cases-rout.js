const express = require('express');
const router = express.Router();
const newCaseController = require('../controllers/new-case-controller');


router
    .route('/')
    .get(newCaseController.getAllCases)
    .post(newCaseController.addCase);

router.route('/findByName')
    .get(newCaseController.getCaseDetails);


module.exports = router;