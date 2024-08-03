// $env:DEBUG="development:*"
// And to remove the env setup type this ---> Remove-Item Env:DEBUG

const mongoose = require("mongoose");

const config = require("config");
// const dbgr = require("debug")("development : mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}`)
  .then(function () {
    console.log("connected to MongoDB");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose.connection;
