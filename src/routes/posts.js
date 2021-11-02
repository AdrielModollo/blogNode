const controller = require('../controllers/posts')

module.exports = router => {
  router.post('/posts/register', async (req, res) => controller.register(req, res))
  router.put('/posts/update/:id', async (req, res) => controller.update(req, res))
  router.delete('/posts/exclude/:id', async (req, res) => controller.exclude(req, res))
  router.get('/posts/consultID/:id', async (req, res) => controller.consultID(req, res))
  router.get('/posts/consult', async (req, res) => controller.consult(req, res))
}
