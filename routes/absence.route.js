const express = require('express')
const router = express.Router()
const absenceController = require('../controllers/absence.controller')

// Routes for absences
router.get('/absences', absenceController.getAllAbsences)
router.post('/absences', absenceController.createAbsence)
router.get('/absences/:id', absenceController.getAbsenceById)
router.put('/absences/:id', absenceController.updateAbsence)
router.delete('/absences/:id', absenceController.deleteAbsence)

module.exports = router
