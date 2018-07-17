"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  docList: {
    type: Array,
    default: []
  }

});


module.exports = mongoose.model('User', UserSchema);
