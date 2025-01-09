const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');

// ✅ Route to get all flashcards
router.get('/', flashcardController.getAllFlashcards);

// ✅ Route to get flashcards by set ID
router.get('/set/:setId', flashcardController.getFlashcardsBySetId);

// ✅ Route to get a flashcard by ID
router.get('/:id', flashcardController.getFlashcardById);

// ✅ Route to create a new flashcard
router.post('/', flashcardController.createFlashcard);

// ✅ Route to update a flashcard by ID
router.patch('/:id', flashcardController.updateFlashcard);

// ✅ Route to delete a flashcard by ID
router.delete('/:id', flashcardController.deleteFlashcard);

module.exports = router;
