var mongoose = require('../db');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:String,
    author:String,
    content:String,
    date: Date
})

module.exports = mongoose.model('blog',blogSchema);