var realtyModel = require(__dirname + '/../db/models/realties');
var realtySchema = require(__dirname + '/../db/schemas/realties').Realty;


var func = new Map([
    ['save', save],
    ['update', update],
    ['remove', remove],
    ['switch', switchActiveInactive]
]);

function save(params) {
    var userId = this.session.userId;
    return realtyModel.saveRealty(params, userId);
}
function update(params) {
    var realtyId = params.realtyId;
    var realtyParams = params.realtyParams;

    return realtyModel.updateRealty(realtyParams, realtyId);
}
function remove(realtyId) {
    return realtySchema.findByIdAndRemove(realtyId).exec(
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
    return realtySchema.findById(params._id, function (err, realty) {
        if (err) {
            console.log(err);
        }
        else {
            realty.active = !Boolean(realty.active);
            realty.save(function (err, data) {
                if (err) {
                    console.log(err);
                    return null;
                }
                return data;
            });
        }

    }.bind(this))
}

exports.realtyQueryHandler = function * (next){

    var query = this.request.body.fields.queryType;
    var queryParam = this.request.body.fields.queryParams;
    // console.log(query, queryParam);
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