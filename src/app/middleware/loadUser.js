var User = require(process.env.HOME + '/src/app/models/user').User;

module.exports = function (next) {
    this.session.user = null;

    if (!this.request.session.user) return next();

    User.findById(this.request.session.user, function (err, user) {
        if (err) return next(err);

        this.response.body.user = response.session.user = user;
        next();
    });
};