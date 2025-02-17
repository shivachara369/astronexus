const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    articleId: { type: mongoose.Schema.Types.ObjectId, ref: "Article", required: true },
    rating: { type: Number, required: true },
    comments: { type: String, required: true },
    dateSubmitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
