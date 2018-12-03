var express = require("express");
var app = express();



app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
            {name: "Carn Springs", image: "https://www.pitchup.com/media.pitchup.co.uk/images/1/image/private/s--z-cLWFt---/c_fill,h_600,w_800/e_improve,fl_progressive/q_jpegmini/v1471295756/carn-springs/x177971.jpg.pagespeed.ic.RaltgFq6J9.jpg"},
            {name: "Storey Arms", image: "http://www.breconbeacons.org/website/var/tmp/thumb_5422__auto_850904660de984af948beee3aee98a4f.jpeg"},
            {name: "Ffrith Beach", image: "https://www.pitchup.com/media.pitchup.co.uk/images/2/image/private/s--1JlwtpfV--/c_fill,h_600,w_800/e_improve,fl_progressive/q_jpegmini/v1487418220/ffrith_beach_touring_park/x218361.jpg.pagespeed.ic.tT-pB1DE-D.jpg"}
        ];
        
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server is up");
});