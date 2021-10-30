const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json()); // Para enviar qualquer json em um objeto

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
})
.then(console.log("Conectado MONGODB"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute)

app.listen("5000", ()=> {
    console.log("Sistema está rodando...");
});
