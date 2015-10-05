var userModel = require(__dirname + '/../db/models/user');
var userSchema = require(__dirname + '/../db/schemas/users').User;


var func = new Map([
    ['save', save],
    ['update', update],
    ['remove', remove]
]);

function save(params) {
    var userId = this.session.userId;
    return userModel.addUser(params, userId);
}
function update(params) {
    var userId = this.session.userId;
    var userParams = params.Params;
    return userModel.updateUser(userParams, userId);
}
function remove(userId) {
    return userSchema.findByIdAndRemove(userId).exec(
        function (err, res) {
            if (err) {
                console.log(err);
                return null;
            }
            return res;
        }
    )
}

exports.userQueryHandler = function * (next){

    var query = this.request.body.fields.queryType;
    var queryParam = this.request.body.fields.queryParams;
    //console.log(query, queryParam);
    var f = func.get(query).bind(this);
    try {

        this.response.body = yield f(queryParam);
        if (this.response.body) {
            this.response.staus = 200;
        }
        else {
            this.response.staus = 200;
            this.response.body = {}
        }

    }
    catch (err) {
        console.log(err)
    }

    yield next;
}
