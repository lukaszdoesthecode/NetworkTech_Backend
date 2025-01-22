const express = require('express');
const router = express.Router();
const flashcardSetController = require('../controllers/flashcardSetController');
const authorize = require('../auth/authorize');

router.get('/', authorize(), flashcardSetController.getAllFlashcardSets);

router.get('/:id', authorize(), flashcardSetController.getFlashcardSetById);

router.post('/', authorize(), flashcardSetController.createFlashcardSet);

router.patch('/:id', authorize(), flashcardSetController.updateFlashcardSet);

router.delete('/:id', authorize(), flashcardSetController.deleteFlashcardSet);

module.exports = router;
