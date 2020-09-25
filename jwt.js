require("dotenv").config();
const jwt = require("jsonwebtoken");

function generateAuthToken(id) {
  const token = jwt.sign({ id: id }, process.env.JWT_KEY); //get the private key from the config file -> environment variable
  return token;
}

exports.generateToken = generateAuthToken;
