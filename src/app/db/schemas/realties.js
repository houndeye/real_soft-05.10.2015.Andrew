var mongoose = require(__dirname + '/../../lib/mongoose');

var schema = new mongoose.Schema({
    userId: String,
    active: {type: Boolean, default: false},
    type: String,
    kind: String,
    address: {
        country: String,
        state: String,
        city: String,
        region: String,
        stAddress: {number: String, streetName: String}
    },
    mapCoordinates: {lat: Number, lng: Number},
    condition: String,
    description: String,
    price: Number,
    rooms: Number,
    area: Number,
    floor: Number,
    date: {type: Date, default: Date.now}
});
exports.Realty = mongoose.model('realties', schema);
