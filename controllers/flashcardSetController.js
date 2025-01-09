const FlashcardSet = require('../models/flashcardSet');

const getAllFlashcardSets = async (req, res) => {
    try {
        const flashcardSets = await FlashcardSet.find();
        res.json(flashcardSets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getFlashcardSetById = async (req, res) => {
    try {
        const flashcardSet = await FlashcardSet.findById(req.params.id);
        if (!flashcardSet) return res.status(404).json({ message: 'Flashcard set not found' });
        res.json(flashcardSet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createFlashcardSet = async (req, res) => {
    const flashcardSet = new FlashcardSet({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description
    });

    try {
        const newFlashcardSet = await flashcardSet.save();
        res.status(201).json(newFlashcardSet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateFlashcardSet = async (req, res) => {
    try {
        const flashcardSet = await FlashcardSet.findById(req.params.id);
        if (!flashcardSet) return res.status(404).json({ message: 'Flashcard set not found' });

        if (req.body.title != null) flashcardSet.title = req.body.title;
        if (req.body.description != null) flashcardSet.description = req.body.description;

        const updatedFlashcardSet = await flashcardSet.save();
        res.json(updatedFlashcardSet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// ✅ Delete a flashcard set by ID
const deleteFlashcardSet = async (req, res) => {
    try {
        const flashcardSet = await FlashcardSet.findById(req.params.id);
        if (!flashcardSet) return res.status(404).json({ message: 'Flashcard set not found' });

        await flashcardSet.remove();
        res.json({ message: 'Flashcard set deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllFlashcardSets,
    getFlashcardSetById,
    createFlashcardSet,
    updateFlashcardSet,
    deleteFlashcardSet
};
