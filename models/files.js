const mongoose = require("mongoose");

const fileScama = new mongoose.Schema({
    originalFileName:{
        type: String,
    },
    newName: {
        type : String,
    },
    path: {
        type : String,
    },
});

const filesModel = mongoose.model("files" , fileScama);

module.exports = filesModel;