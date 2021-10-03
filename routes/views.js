const express = require("express");
const router = express.Router();
const path = require("path");
const listOfServices= require("../listOfServices.js");




function onService(day, hour) {
    if (hour >= 9 && hour <= 16 && day !== 0 && day !== 6)
        return false
    return true
    
}

const onServiceMiddeleware = function (req, res) {
    const date = new Date();
    const day = date.getDay()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    
    if (!onService(day, hour)) {
        
        res.render("ourServices" , {listOfServices})

    }
    else
        res.render("outOfServices",{ sec,min,hour})
}




router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "Public", "HomePage.html"));
});


router.get("/Services", onServiceMiddeleware, (req, res) => {
    res.sendFile(path.join(__dirname, "../", "Public", "OurServices.html"));
    
});

router.get("/Contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "Public", "ContactUs.html"));
});

router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "Public", "notFound.html"));
});


module.exports = router;




// <<>>
// // router.get('/css/HomePage.css', function(req, res){
// //   res.sendFile(__dirname+'/css/HomePage.css');
// // });

