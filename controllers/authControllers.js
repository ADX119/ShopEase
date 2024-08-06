const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generatetoken");
const userModels = require("../models/user-models");

module.exports.registerUser = async function (req, res) {
  try {
    let { email, password, fullname } = req.body;

    let user = await userModels.findOne({ email: email });
    if (user) return res.status(409).send("Email already exists.");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let user = await userModels.create({
            email,
            password: hash,
            fullname,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User created successfully!!!");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;

  let user = await userModels.findOne({ email: email });
  if (!user) return res.status(401).send("Invalid email or password.");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result){
        let token = generateToken(user);
        res.cookie("token", token);
        res.send("User logged in successfully!!!");
    }else{
        return res.status(401).send("Invalid email or password.");
    }
  });
};
