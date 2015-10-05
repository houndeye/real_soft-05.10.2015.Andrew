var Realty = require(__dirname + '/../../db/schemas/realties').Realty;
//var saveImg = require('middleware/uploadHandler').save;

exports.saveRealty = function (params, userId) {
    try{
    var realty = new Realty({
        userId: userId,
        type: params.type,
        kind: params.kind,
        address: params.address,
        mapCoordinates: params.mapCoordinates,
        condition: params.condition,
        description: params.description,
        price: params.price,
        rooms: params.rooms,
        area: params.area,
        floor: params.floor
    });
    return realty.save(function (err, newRealty) {
        if (err) console.error(err);
        return newRealty;
    });
    }catch(err){
        console.log(err)
    }
}
;
exports.updateRealty = function (params, realtyId) {
    try{
    return Realty.findByIdAndUpdate(realtyId, {
        $set: {
            type: params.type,
            kind: params.kind,
            address: params.address,
            mapCoordinates: params.mapCoordinates,
            condition: params.condition,
            description: params.description,
            price: params.price,
            rooms: params.rooms || null,
            area: params.area,
            floor: params.floor || null
        }
    }).exec(function (err, res) {
        if (err) {
            console.log(err);
            return err;
        }
        // console.log(res);
        return res;
    })
    }catch(err){
        console.log(err)
    }


};



