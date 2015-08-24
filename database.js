var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Opinion = new Schema({
    title : String,
});

mongoose.model('opinions', Opinion);

mongoose.connect('mongodb://localhost/node-opinion');
