var mongoose = require('mongoose');
var config = require(__dirname + '/../config');
//console.log('Mongoose default connection open to ' + config.get('mongoose:localUri'));
mongoose.connect(process.env.MONGOLAB_URI || config.get('mongoose:uri'), config.get('mongoose:options'));
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + config.get('mongoose:uri'));
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
module.exports = mongoose;