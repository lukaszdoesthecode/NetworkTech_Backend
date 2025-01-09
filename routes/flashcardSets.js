const express = require('express');
const router = express.Router();
const flashcardSetController = require('../controllers/flashcardSetController');

// Route to get all flashcard sets
router.get('/', flashcardSetController.getAllFlashcardSets);

// Route to get a flashcard set by ID
router.get('/:id', flashcardSetController.getFlashcardSetById);

// Route to create a new flashcard set
router.post('/', flashcardSetController.createFlashcardSet);

// Route to update a flashcard set by ID
router.patch('/:id', flashcardSetController.updateFlashcardSet);

// Route to delete a flashcard set by ID
router.delete('/:id', flashcardSetController.deleteFlashcardSet);

module.exports = router;
