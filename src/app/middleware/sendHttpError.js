module.exports = function*(next) {

    response.sendHttpError = function (error) {

        response.status(error.status);
        if (response.headers['x-requested-with'] == 'XMLHttpRequest') {
            response.body = error;
        } else {
            this.set("error", {error: error});
        }
    };

    next();

};