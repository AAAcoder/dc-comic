var express=require('express');
var app=express();
app.get("/",(req,res)=>{
    res.render("comic1");
})
app.get("/comic2",(req,res)=>{
    res.render("comic2");
})
app.get("/comic3",(req,res)=>{
    res.render("comic3");
})
app.listen(2000,()=>{
    console.log("server is running");
})

app.set('view engine','ejs');