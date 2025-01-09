const Flashcard = require('../models/flashcard');

// ✅ Get all flashcards
const getAllFlashcards = async (req, res) => {
    try {
        const flashcards = await Flashcard.find();
        res.json(flashcards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Get all flashcards by Set ID
const getFlashcardsBySetId = async (req, res) => {
    try {
        const flashcards = await Flashcard.find({ setId: req.params.setId });
        if (flashcards.length === 0) return res.status(404).json({ message: 'No flashcards found for this set' });
        res.json(flashcards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Get a flashcard by ID
const getFlashcardById = async (req, res) => {
    try {
        const flashcard = await Flashcard.findById(req.params.id);
        if (!flashcard) return res.status(404).json({ message: 'Flashcard not found' });
        res.json(flashcard);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Create a new flashcard
const createFlashcard = async (req, res) => {
    const flashcard = new Flashcard({
        setId: req.body.setId,
        term: req.body.term,
        definition: req.body.definition
    });

    try {
        const newFlashcard = await flashcard.save();
        res.status(201).json(newFlashcard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// ✅ Update a flashcard by ID
const updateFlashcard = async (req, res) => {
    try {
        const flashcard = await Flashcard.findById(req.params.id);
        if (!flashcard) return res.status(404).json({ message: 'Flashcard not found' });

        if (req.body.term != null) flashcard.term = req.body.term;
        if (req.body.definition != null) flashcard.definition = req.body.definition;

        const updatedFlashcard = await flashcard.save();
        res.json(updatedFlashcard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// ✅ Delete a flashcard by ID
const deleteFlashcard = async (req, res) => {
    try {
        const flashcard = await Flashcard.findById(req.params.id);
        if (!flashcard) return res.status(404).json({ message: 'Flashcard not found' });

        await flashcard.remove();
        res.json({ message: 'Flashcard deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Export the functions to be used in the router
module.exports = {
    getAllFlashcards,
    getFlashcardsBySetId,
    getFlashcardById,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard
};
