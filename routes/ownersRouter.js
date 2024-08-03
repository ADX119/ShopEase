const express = require('express');
const router = express.Router();
const ownersModel = require("../models/owner-model")


router.post("/create",async function(req,res){
    let owners = await ownersModel.find()
    if (owners.length > 0){
        return res.status(503).send("You cannot create a owner")

    }
    let {fullname,email,password} = req.body;
    let createdowner = await ownersModel.create({
      fullname,
      email,
      password 

    });
    res.status(200).send(createdowner)
})

router.get("/", function(req,res){
    res.send("working owners")

})

module.exports = router;