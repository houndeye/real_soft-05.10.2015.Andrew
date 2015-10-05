//var User = require(process.env.HOME + '/src/app/db/schemas/users').User;
var User = require(__dirname + "/../db/schemas/users").User;

var temp = {user: "", userId: ""};
exports.authorize = function * (next){

    this.session.userId = null;
    this.session.user = null;
    temp.user = yield User.authorize(this.request.body.fields.username, this.request.body.fields.password);


    if (temp.user) {
        this.session.userId = temp.user._id;
        this.session.user = temp.user;
        this.response.status = 200;
        this.response.body = true;
    }
    yield next;

}
