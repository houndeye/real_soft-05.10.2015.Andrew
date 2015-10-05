var ImgsSchema = require(__dirname + '/../db/schemas/imgs').Imgs;

var ImgsModel = require(__dirname + '/..//db/models/imgs');


var func = new Map([
    ['remove', remove],
    ['save', save],
    ['update', update],
    ['clear', clear]
]);

function save(realtyId, images) {
    if (realtyId) {
        return ImgsModel.saveImgs(JSON.parse(images), realtyId);
    }
    return null;
}

function update(imagesId, images) {

    if (imagesId) {
        return ImgsModel.updateImgs(JSON.parse(images), imagesId);
    }
    return null;
}

function remove(imageId) {
    return ImgsSchema.findByIdAndRemove(imageId).exec(
        function (err, res) {
            if (err) {
                console.log(err);
                return null;
            }
            console.log(res);
            return res;
        }
    )
}

function clear() {
}
exports.ImageHandler = function * (next){
    var query = this.request.body.fields.queryType;
    var queryParam = this.request.body.fields.queryParams;
    var queryFiles = this.request.body.fields.images;
    var f = func.get(query);
    //console.log(queryParam);
    //console.log(queryFiles);
    //console.log(query);
    //console.log(f);
    try {
        yield f(queryParam, queryFiles);
        this.response.staus = 200;
        this.response.body = {}
    }
    catch (err) {
        console.log(err)
    }
    yield next;
}