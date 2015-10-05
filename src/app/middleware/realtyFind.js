var realtySchema = require(__dirname + '/../db/schemas/realties').Realty;
var Img = require(__dirname + '/../db/schemas/imgs').Img;


var func = new Map([
    ['findAllUserRealty', findAllUserRealty],
    ['findAllActiveRealty', findAllActiveRealty],
    ['findAllActiveRealtyWithParams', findAllActiveRealtyWithParams],
    ['getImg', getCurrentRealtyImg],
    ['getAllImages', getAllImages]
]);


function getCurrentRealtyImg(realtyId) {
    // console.log(realtyId);
    return Img.find({}).
        where({realtyId: realtyId}).exec(function (err, docs) {
            if (err) {
                console.log(err);
                return null;
            }
            else {
                if (docs.length >= 1) {
                    // console.log(docs);
                    return docs;
                }
                else {
                    //   console.log(docs);
                    return undefined;
                }
            }
        });

}
function getAllImages() {
    return Img.find({}).exec(function (err, docs) {
        if (err) {
            console.log(err);
            return null;
        }
        else {
            // console.log(docs);
            return docs;

        }
    });
}
function findAllActiveRealtyWithParams(params) {
    console.log(params);
    console.log(params.price.min, params.price.max);
    return realtySchema.find({})
        .where({active: true})
        .where('price').gte(params.price.min).lte(params.price.max)
        .exec(function (err, docs) {
            if (err) {
                console.error(err);
                return null;
            } else {
                // console.log(docs);
                return docs;
            }
        }
    )
}
function findAllActiveRealty() {
    return realtySchema.find({})
        .where({active: true})
        .exec(function (err, docs) {
            if (err) {
                console.error(err);
                return null;
            } else {
                //  console.log(docs);
                return docs;
            }
        }
    )
}

//find by user id
function findAllUserRealty() {

    var userId = this.session.userId;
    return realtySchema.find({'userId': userId}, function (err, docs) {
        if (err) {
            console.error(err);
            return null;
        }
        {
            return docs;
        }
    });

}


exports.realtyQueryHandler = function * (next){

    var query = this.request.body.fields.queryType;
    var queryParam = this.request.body.fields.queryParams;
    //console.log(this.request.body.fields);
    //console.log(query, queryParam);
    var f = func.get(query).bind(this);

    try {
        this.response.body = yield f(queryParam);

        this.response.status = 200;
        //this.response.body.map(function (el) {
        //    return el.active;
        //});
        //console.log(this.response.body.map(function (el) {
        //    return el.active;
        //}));
    }
    catch (err) {
        console.log(err)
    }


    yield next;
}
