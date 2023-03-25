const express = require('express');
const router = express.Router();
const justificationController = require('../controllers/justification.controller');

// Routes for justifications
router.get('/justifications', justificationController.getAllJustifications);
router.post('/justifications', justificationController.createJustification);
router.get('/justifications/:id', justificationController.getJustificationById);
router.put('/justifications/:id', justificationController.updateJustification);
router.delete('/justifications/:id', justificationController.deleteJustification);

module.exports = router;
