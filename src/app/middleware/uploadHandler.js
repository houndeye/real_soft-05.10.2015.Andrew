exports.uploadHandler = function*(next) {
    var file = this.request.body.fields;
    this.response.body = {name: file.original_filename, path: file.url, size: file.bytes};
    this.response.status = 200;

    yield next;
};

