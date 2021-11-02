const controller = require('../controllers/auth')

module.exports = router => {
  router.post('/auth/register', async (req, res) => controller.register(req, res))
  router.post('/auth/login', async (req, res) => controller.login(req, res))
}
