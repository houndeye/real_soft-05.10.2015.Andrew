var Img = require(__dirname + '/../../db/schemas/imgs').Img;

function pathHandler(path) {
    var p = path.substring(path.indexOf("src")).replace(/\\/g, "/");
    return [process.env.HOME + '/src', p].join('/')
}
function imgHandler(file){

    return {name: file.original_filename, path: file.url, size: file.bytes};
}


exports.saveImgs = function (images, realtyId) {
    images = images.map(function (img) {
        img = imgHandler(img);
        return img;
    });

    //console.log(images);
    try {
        var imgs = new Img({
            realtyId: realtyId,
            image: images
        });
        return imgs.save(function (err, newImg) {
            if (err) return console.error(err);
            console.log(newImg)

        })
    } catch (err) {
        console.log(err)
    }

};

exports.updateImgs = function (images, imagesId) {
    try {
        images = images.map(function (img) {
            img.path = pathHandler(img.path);
            return img;
        });
        return Img.findByIdAndUpdate(imagesId, {
            $set: {image: images}
        }).exec(function (err, res) {
            if (err) {
                console.error(err);
                return null;
            }
            return res;
        })
    } catch (err) {
        console.log(err)
    }
};