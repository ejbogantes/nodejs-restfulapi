//We're using strict mode for JavaScript
'use strict';

const app = require('express'),
    router = app.Router(),
    authMiddleware = require('../middlewares/authMiddleware'),
    userController = require('../controllers/userController');

//The GET routes
router.get('/', authMiddleware.isAuthorized, userController.get.index);
router.get('/create', userController.get.create);
router.get('/:id', userController.get.show);
router.get('/:id/edit', userController.get.edit);

//The POST routes
router.post('/', userController.post.store);

//The PUT routes
router.put('/', userController.put.update);

//The PATCH routes
router.patch('/', userController.put.update);

//The DELETE routes
router.delete('/', userController.delete.destroy);

//we export the router
module.exports = {
    path: '/users',
    router: router
};
