const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    source: { type: String, required: true },
    datePublished: { type: Date, required: true },
});

module.exports = mongoose.model("Article", articleSchema);
