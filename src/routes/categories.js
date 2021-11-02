const controller = require('../controllers/categories')

module.exports = router => {
  router.post('/categories/register', async (req, res) => controller.register(req, res))
  router.get('/categories/consult', async (req, res) => controller.consult(req, res))
}
