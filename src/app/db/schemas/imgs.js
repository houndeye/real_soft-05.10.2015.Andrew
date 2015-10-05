var mongoose = require(__dirname + '/../../lib/mongoose');


var schema = new mongoose.Schema({

    realtyId: {
        type: String,
        unique: true,
        required: true
    },
    image: [{name: String, path: String, size: Number}],
//    image: [{data: Buffer, contentType: contentType}],
    date: {type: Date, default: Date.now}
});


exports.Img = mongoose.model('imgs', schema);