const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');
const authorize = require('../auth/authorize');

router.get('/', authorize(), flashcardController.getAllFlashcards);

router.get('/set/:setId', authorize(), flashcardController.getFlashcardsBySetId);

router.get('/:id', authorize(), flashcardController.getFlashcardById);

router.post('/', authorize(), flashcardController.createFlashcard);

router.patch('/:id', authorize(), flashcardController.updateFlashcard);

router.delete('/:id', authorize(), flashcardController.deleteFlashcard);

module.exports = router;
