const express = require("express");
const logger = require("morgan");
const bp = require("body-parser");
const admin = require("firebase-admin");

var serviceAccount = require("./fire-node-4d8a6-firebase-adminsdk-74dxo-fc7e975813.json");
var firebaseAdmin = admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:"https://fire-node-4d8a6.firebaseio.com"
})
let database = firebaseAdmin.database()
const app = express();

app.use(logger('dev'));
app.set("view engine","ejs");
app.use(express.static("public"));
app.set("views",__dirname+"/public");
// app.use(bp.json())
app.use(bp.urlencoded({extended:false}));


app.get("/",function(req,res){
let restRef=database.ref("/Restaurent");
restRef.once("value",function(snapshot){
    console.log(snapshot.val());
    let RestNames = snapshot.val();
    if(!RestNames){
        RestNames={}
    }
    res.render("home.ejs",{rest :RestNames})
})
//  let RestNames = snapshot.val();
// res.send("hello");
// res.render("home.ejs",{rest :snapshot.val()})
});


app.post("/",function(req,res){
    var favo = req.body.favorite;
    console.log(favo);
 res.render("result.ejs",{data:favo})
})










app.listen(3000,function(){
    console.log("server running at port 3000");
    
})