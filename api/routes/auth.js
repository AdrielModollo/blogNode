const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Cadastro
router.post("/register", async(req,res) => {
    try{

        const salt = await bcrypt.genSalt(10); //Configuração bcrypt
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save(); //Espere a função assincrona e salve para mim.
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router

//Logar