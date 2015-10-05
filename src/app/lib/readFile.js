var fs = require('fs');


exports.readFile = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {encoding: 'utf8'}, function (err, data) {
            if (err) {
                reject(err);
                console.error(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
exports.writeFile = function (path, data) {
    console.log(JSON.stringify(data));
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, JSON.stringify(data), function (err) {
            if (err) {
                reject(err);
                console.log(err);
            }
        });
    });

};
exports.readFileBuffer = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, data) {
            if (err) {
                reject(err);
                console.error(err);
            }
            else {
                resolve(data);
            }
        });
    });
};