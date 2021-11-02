const { Router } = require('express')
const path = require('path');
const { readdirSync } = require('fs');

module.exports = app => {
  const router = Router()
  app.use('/', router)
  readdirSync(path.join(__dirname, '../routes')).map(async file => {
    if (!file.includes('.spec.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}

