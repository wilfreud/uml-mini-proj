const Justification = require('../models/justification.model')
const Absence = require('../models/absence.model')

// Fonction pour créer une nouvelle justification
exports.createJustification = async (req, res) => {
  try {
    const { studentId, documentUrl, dates } = req.body
    const justification = new Justification({ 
      student : studentId, 
      justificationUrl : documentUrl, 
      dates : dates 
    })
    await justification.save()
    return res.status(201).json({ justification })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erreur lors de la création de la justification' })
  }
}

// Fonction pour récupérer toutes les justifications
exports.getAllJustifications = async (req, res) => {
  try {
    const justifications = await Justification.find().populate('student', 'firstName lastName dateOfBirth')
    return res.status(200).json({ justifications })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erreur lors de la récupération des justifications' })
  }
}

// Fonction pour récupérer une justification par son identifiant
exports.getJustificationById = async (req, res) => {
  try {
    const { id } = req.params
    const justification = await Justification.findById(id).populate('student', 'firstName lastName dateOfBirth')
    if (!justification) {
      return res.status(404).json({ message: 'Justification non trouvée' })
    }
    return res.status(200).json({ justification })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erreur lors de la récupération de la justification' })
  }
}

// Fonction pour mettre à jour une justification
exports.updateJustification = async (req, res) => {
  try {
    const { id } = req.params
    const { studentId, documentUrl, dates } = req.body
    const justification = await Justification.findByIdAndUpdate(id, { studentId, documentUrl, dates }, { new: true })
    if (!justification) {
      return res.status(404).json({ message: 'Justification non trouvée' })
    }
    return res.status(200).json({ justification })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erreur lors de la mise à jour de la justification' })
  }
}

// Fonction pour supprimer une justification
exports.deleteJustification = async (req, res) => {
  try {
    const { id } = req.params
    const justification = await Justification.findByIdAndDelete(id)
    if (!justification) {
      return res.status(404).json({ message: 'Justification non trouvée' })
    }
    // Supprime également les absences correspondantes
    await Absence.deleteMany({ _id: { $in: justification.absences } })
    return res.status(200).json({ message: 'Justification supprimée avec succès' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erreur lors de la suppression de la justification' })
  }
}
