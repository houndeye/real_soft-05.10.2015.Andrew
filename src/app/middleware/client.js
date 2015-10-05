var clientModel = require(__dirname + '/../db/models/clients');
var clientSchema = require(__dirname + '/../db/schemas/clients').Client;


var func = new Map([
    ['save', save],
    ['update', update],
    ['remove', remove],
    ['switch', switchActiveInactive]
]);

function save(params) {
    var userId = this.session.userId;
    return clientModel.saveClient(params, userId);
}
function update(params) {
    var clientId = params.clientId;
    var clientParams = params.clientParams;
    return clientModel.updateClient(clientParams, clientId);
}
function remove(clientId) {
    return clientSchema.findByIdAndRemove(clientId).exec(
        function (err, res) {
            if (err) {
                console.log(err);
                return null;
            }
            return res;
        }
    )
}

function switchActiveInactive(params) {

    return clientSchema.findById(params._id, function (err, client) {
        if (err) {
            console.log(err);
        }
        else {
            client.active = !Boolean(client.active);
            client.save(function (err, data) {
                if (err) {
                    console.log(err);
                    return null;
                }
                return data;
            });
        }
    })
}

exports.clientQueryHandler = function * (next){

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