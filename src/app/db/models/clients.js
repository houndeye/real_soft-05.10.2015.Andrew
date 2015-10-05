var Client = require(__dirname + '/../../db/schemas/clients').Client;


exports.saveClient = function (params, userId) {
    try {
        var client = new Client({
            userId: userId,
            phone: params.phone,
            type: params.type,
            kind: params.kind,
            region: params.region,
            description: params.description,
            minPrice: params.minPrice,
            maxPrice: params.maxPrice,
            rooms: params.rooms,
            area: params.area
        });
        return client.save(function (err, newClient) {
            if (err) console.error(err);
            return newClient;
        });
    } catch (err) {
        console.log(err)
    }

}
;
exports.updateClient = function (params, clientId) {
    try {
        return Client.findByIdAndUpdate(clientId, {
            $set: {
                phone: params.phone,
                type: params.type,
                kind: params.kind,
                region: params.region,
                description: params.description,
                minPrice: params.minPrice,
                maxPrice: params.maxPrice,
                rooms: params.rooms || null,
                area: params.area
            }
        }).exec(function (err, res) {
            if (err) {
                console.log(err);
                return err;
            }
            // console.log(res);
            return res;
        })
    } catch (err) {
        console.log(err)
    }


};



