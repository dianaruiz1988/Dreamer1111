const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const diarySchema = new Schema({
    date: String,
    title: String,
    diary: String,
    
});

const diary = model("diary", diarySchema);

module.exports = mongoose.model('diary', diarySchema);