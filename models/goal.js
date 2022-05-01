const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const goalSchema = new Schema({
    name: String,
    date: String,
    deadline: String,
    achieved: Boolean
},{
    timestamps:true
});


module.exports = mongoose.model('Goal', goalSchema);