const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Bem Vindo")
});

app.get("/artigos",function(req,res){
    res.send("Alguns Artigos")
});

app.listen(8081,function(){
    console.log("Servidor ONLINE MOTHERFUCKER")
    });




//app.get("/nome",function(req,res){ 
//    res.json({nome: "Caio"})
//});