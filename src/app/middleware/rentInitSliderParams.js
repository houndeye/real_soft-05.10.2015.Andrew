var realtySchema = require(__dirname + '/../db/schemas/realties').Realty;


exports.initAllStartSliderParams = function * (next)
{
    var a = [];
    var keys = ['price', 'floor', 'area', 'rooms'];
    var res = {};
    yield keys.map(function * (key){

        var min = yield realtySchema.find({}).sort(JSON.parse('{"' + [key] + '": 1}')).limit(1);
        var max = yield  realtySchema.find({}).sort(JSON.parse('{"' + [key] + '": -1}')).limit(1);
        console.log(min[0], max[0]);
        if (min[0]) {
            res[key] = {min: min[0][key], max: max[0][key]}
        }
        else {
            res = undefined;
        }


    }
)
    this.response.body = res;
    this.response.status = 200;

    yield next;
}