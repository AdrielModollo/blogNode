const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Criar postagem
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


  
//Deleta postagem
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

//Recuperar postagem
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc; //Para ocultar senha e enviar status de resposta para outras centenas
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;