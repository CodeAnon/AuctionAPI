const users = require('../controllers/users.server.controllers');

module.exports = function(app) {
    app.route('/api/v1/users')
        .post(users.create);

    app.route('/api/v1/users/login')
        .post(users.login);

    app.route('/api/v1/users/logout')
        .post(users.logout);

    app.route('/api/v1/users/:userId')
        .get(users.get)
        .patch(users.alter);
};