const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')

// Getting all users
router.get('/', getAllUsers)

// Getting one user by ID
router.get('/:id', getUserById)

// Creating a new user
router.post('/', createUser)

// Updating a user by ID
router.patch('/:id', updateUser)

// Deleting a user by ID
router.delete('/:id', deleteUser)

module.exports = router
