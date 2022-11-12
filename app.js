const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
var items=["Yoga","Prayer","Breakfast"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  var day=date();

  res.render("list",{dayname:day, newitem:items});

});

app.get("/about",function(req,res){
  res.render("about");
});

app.post("/",function(req,res){
  var item=req.body.activity;
  items.push(item);
  res.redirect("/");
})
app.listen(3000,function(){
  console.log("server started at port 3000");
})
