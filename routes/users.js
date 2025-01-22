const express = require('express')
const router = express.Router()
const flashcardSetController = require('../controllers/userController');
const authorize = require('../auth/authorize');

router.get('/', authorize('admin'), flashcardSetController.getAllUsers)

router.get('/:id', authorize('admin'), flashcardSetController.getUserById)

router.post('/', authorize('admin'), flashcardSetController.createUser)

router.patch('/:id', authorize('admin'), flashcardSetController.updateUser)

router.delete('/:id', authorize('admin'), flashcardSetController.deleteUser)

module.exports = router
