const Order = require('../models/order.model');

exports.create = (req, res) => {
    if(!req.body.items) {
        return res.status(400).send({
            message: "Order can not be empty"
        });
    }

    const order = new Order({
        customer_first_name: req.body.customer_first_name,
        customer_last_name: req.body.customer_last_name,
        order_placed_date: req.body.order_placed_date,
        deliver_by: req.body.deliver_by,
        items: req.body.items,
    })

    order.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while making the order."
            })
    })
};

exports.find = (req, res) => {
    Order.find()
        .then(orders => {
            res.send(orders);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while trying to retrieve orders."
            })
    })
};
