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

//Atualizar postagem
router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("Você pode atualizar somente seus posts!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
//Deletar post
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post deletado...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("Você não pode deletar este post!");
      }
    } catch (err) {
      res.status(500).json(err);
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