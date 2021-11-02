const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const setupRouters = require("../config/routes");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json()); 

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
})
.then(console.log("Conectado MONGODB"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Arquivo enviado");
  });


  setupRouters(app);
  
app.listen(process.env.PORT, ()=> {
    console.log(`Sistema rodando na porta ${process.env.PORT}`);
});
