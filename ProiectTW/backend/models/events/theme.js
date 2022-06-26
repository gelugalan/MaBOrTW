const mongoose = require("mongoose");

const themeSchema = mongoose.Schema({
    themeName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ThemeSchema', themeSchema);