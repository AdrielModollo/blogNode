const User = require('../models/User')
const Post = require('../models/Post')

const register = async (req, res) => {
    const newPost = new Post(req.body)
    try {
      const savedPost = await newPost.save()
      res.status(200).json(savedPost)
    } catch (err) {
      res.status(500).json(err)
    }
}

const update = async (req, res) => {
        try {
          const post = await Post.findById(req.params.id)
          if (post.username === req.body.username) {
            try {
              const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                {
                  $set: req.body
                },
                { new: true }
              )
              res.status(200).json(updatedPost)
            } catch (err) {
              res.status(500).json(err)
            }
          } else {
            res.status(401).json('Você pode atualizar somente seus posts!')
          }
        } catch (err) {
          res.status(500).json(err)
        }
}

const exclude = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
          try {
            await post.delete()
            res.status(200).json('Post deletado...')
          } catch (err) {
            res.status(500).json(err)
          }
        } else {
          res.status(401).json('Você não pode deletar este post!')
        }
      } catch (err) {
        res.status(500).json(err)
      }
}

const consultID = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
      } catch (err) {
        res.status(500).json(err)
      }
}

const consult = async (req, res) => {
    const username = req.query.user
    const catName = req.query.cat
    try {
      let posts
      if (username) {
        posts = await Post.find({ username })
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName]
          }
        })
      } else {
        posts = await Post.find()
      }
      res.status(200).json(posts)
    } catch (err) {
      res.status(500).json(err)
    }
}

module.exports = {
    register: register,
    update: update,
    exclude: exclude,
    consultID: consultID,
    consult: consult
}
