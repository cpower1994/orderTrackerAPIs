const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    customer_first_name: String,
    customer_last_name: String,
    order_placed_date: Date,
    deliver_by: Date,
    items: Array,
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
