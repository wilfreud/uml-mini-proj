const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controller')

// GET request pour récupérer tous les étudiants
router.get('/students', studentController.getStudents)

// GET request pour récupérer un étudiant par son identifiant
router.get('/students/:id', studentController.getStudentById)

// POST request pour créer un nouvel étudiant
router.post('/students', studentController.createStudent)

// PUT request pour mettre à jour les informations d'un étudiant
router.put('/students/:id', studentController.updateStudentById)

// DELETE request pour supprimer un étudiant par son identifiant
router.delete('/students/:id', studentController.deleteStudentById)

module.exports = router
