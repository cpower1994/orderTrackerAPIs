module.exports = (app) => {
    const orders = require('../controllers/order.controller.js');

    app.post('/orders', orders.create);

    app.get('/orders', orders.find);
}
