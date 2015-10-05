var clientSchema = require(__dirname + '/../db/schemas/clients').Client;


var func = new Map([
    ['findAllUserClients', findAllUserClients],
    ['findAllActiveClients', findAllActiveClients]
]);

function findAllActiveClients() {
    return clientSchema.find({})
        .where({active: true}).exec(function (err, docs) {
            if (err) {
                console.error(err);
                return null;
            }
            // console.log(docs)
            return docs;

        });
}

//find by user id
function findAllUserClients() {
    var userId = this.session.userId;
    return clientSchema.find({'userId': userId}, function (err, docs) {
        if (err) {
            console.error(err);
            return null;
        }
        {
            return docs;
        }
    });

}

exports.clientQueryHandler = function * (next){
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