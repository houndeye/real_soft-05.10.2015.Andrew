var userSchema = require(__dirname + '/../db/schemas/users').User;


var func = new Map([
    ['findUser', findUser]
]);


//find by user id
function findUser() {
    var userId = this.session.userId;
    return userSchema.find({'userId': userId}, function (err, docs) {
        if (err) {
            console.error(err);
            return null;
        }
        {
            return docs;
        }
    });

}

exports.userQueryHandler = function* (next){
    var query = this.request.body.fields.queryType;
    var queryParam = this.request.body.fields.queryParams;
    //console.log(this.request.body.fields);
    //console.log(query, queryParam);
    var f = func.get(query).bind(this);

    try {
        this.response.body = yield f(queryParam);
        this.response.status = 200;
    }
    catch (err) {
        console.log(err)
    }
    yield next;
}