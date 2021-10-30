const express = require("express");
const app = express();

app.use("/teste",(req,res)=>{
    console.log("Olá está é minha url")
})

app.listen("5000", ()=> {
    console.log("Sistema está rodando...");
});
