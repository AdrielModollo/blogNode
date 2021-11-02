const controller = require('../controllers/users')

module.exports = router => {
  router.put('/users/update/:id', async (req, res) => controller.update(req, res))
  router.delete('/users/exclude/:id', async (req, res) => controller.exclude(req, res))
  router.get('/users/consultID/:id', async (req, res) => controller.consultID(req, res))
}
