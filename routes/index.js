const express = require('express');
const isloggedin = require("../middlewares/isLoggedIn")
const router = express.Router();

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index",{error});
});
router.get("/shop",isloggedin,function(req,res){
    res.render("shop");
})



module.exports = router;