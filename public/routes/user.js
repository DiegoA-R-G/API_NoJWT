const { Router } = require('express')

const { getUser, postUser, putUser, deleteUser } = require('../controllers/userControl')

const routes = Router();

routes.get('/', getUser)

routes.post('/', postUser)

routes.put('/:id', putUser)

routes.delete('/:id', deleteUser)

module.exports = routes;