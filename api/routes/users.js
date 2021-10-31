const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');


//Atualiza
router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id) {
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            },
            {new:true}//envie este novo usuário atualizado
        );
            res.status(200).json(updatedUser);
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("Você pode atualizar apenas sua conta!");
    }
});

//Deleta
router.delete("/:id", async(req,res) => {
    if(req.body.userId === req.params.id) {
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("O usuário foi deletado...");
            } catch(err){
                res.status(500).json(err);
            } 
        } catch(err) {
            res.status(404).json("Usuário não encontrado!");
        }
    } else {
        res.status(401).json("Você pode deletar apenas sua conta!");
    }
});


  

module.exports = router;