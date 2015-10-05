var User = require(__dirname + '/../db/models/user');


exports.addNewUser = function * (next){
    var temp = yield  User.addUser(this.request.body.fields);
    if (temp) {
        this.session.userId = temp._id;
        this.session.user = temp;
        this.response.status = 200;
        this.response.body = true;

    }
    yield next;
}
