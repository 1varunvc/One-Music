const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: String,
  email: String,
  spotifyId: String,
  accessToken: String,
  refreshToken: String
})

const User = mongoose.model('user', userSchema);

module.exports =  User;
