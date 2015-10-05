var mongoose = require(__dirname + '/../../lib/mongoose');

var schema = new mongoose.Schema({
    userId: String,
    userPhone: String,
    active: {type: Boolean, default: false},
    type: String,
    kind: String,
    region: String,
    description: String,
    minPrice: Number,
    maxPrice: Number,
    rooms: Number,
    area: Number,
    date: {type: Date, default: Date.now}
});

exports.Client = mongoose.model('clients', schema);