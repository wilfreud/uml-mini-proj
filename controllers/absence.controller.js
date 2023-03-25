const Absence = require('../models/absence.model');

const absenceController = {};

// Récupérer toutes les absences
absenceController.getAllAbsences = async (req, res) => {
  try {
    const absences = await Absence.find().populate('student', 'firstName lastName dateOfBirth');
    res.json(absences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Récupérer une absence par son ID
absenceController.getAbsenceById = async (req, res) => {
  try {
    const absence = await Absence.findById(req.params.id).populate('student', 'firstName lastName dateOfBirth');
    if (absence == null) {
      return res.status(404).json({ message: 'Absence introuvable' });
    }
    res.json(absence);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer une absence
absenceController.createAbsence = async (req, res) => {
  const absence = new Absence({
    student: req.body.studentId,
    course: req.body.courseId,
    date: req.body.date,
    status: req.body.status
  });

  try {
    const newAbsence = await absence.save();
    res.status(201).json(newAbsence);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mettre à jour une absence
absenceController.updateAbsence = async (req, res) => {
  try {
    const absence = await Absence.findById(req.params.id);
    if (absence == null) {
      return res.status(404).json({ message: 'Absence introuvable' });
    }

    if (req.body.studentId != null) {
      absence.studentId = req.body.studentId;
    }
    if (req.body.courseId != null) {
      absence.courseId = req.body.courseId;
    }
    if (req.body.date != null) {
      absence.date = req.body.date;
    }
    if (req.body.status != null) {
      absence.status = req.body.status;
    }

    const updatedAbsence = await absence.save();
    res.json(updatedAbsence);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer une absence
absenceController.deleteAbsence = async (req, res) => {
  try {
    const absence = await Absence.findById(req.params.id);
    if (absence == null) {
      return res.status(404).json({ message: 'Absence introuvable' });
    }
    await absence.remove();
    res.json({ message: 'Absence supprimée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = absenceController;
