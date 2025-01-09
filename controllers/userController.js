const User = require('../models/user')

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ message: 'User not found' })
        res.json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// Create a new user
const createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        passwordHash: req.body.passwordHash
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ message: 'User not found' })

        if (req.body.username != null) user.username = req.body.username
        if (req.body.email != null) user.email = req.body.email
        if (req.body.passwordHash != null) user.passwordHash = req.body.passwordHash

        const updatedUser = await user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ message: 'User not found' })

        await user.remove()
        res.json({ message: 'User deleted successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// Export the functions to be used in the router
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
