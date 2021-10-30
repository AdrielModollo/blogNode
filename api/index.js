const express = require("express");
const app = express();

console.log("Olá mundo");

app.listen("5000", ()=> {
    console.log("Sistema está rodando...");
});
