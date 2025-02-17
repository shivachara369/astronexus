const Feedback = require("../models/Feedback");

const submitFeedback = async (req, res) => {
    const { articleId, rating, comments } = req.body;

    try {
        const newFeedback = new Feedback({
            userId: req.userId,
            articleId,
            rating,
            comments,
        });

        await newFeedback.save();
        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error submitting feedback" });
    }
};

module.exports = { submitFeedback };
