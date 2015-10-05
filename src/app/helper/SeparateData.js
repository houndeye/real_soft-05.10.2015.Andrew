export var separateRealtyByType = function (data, type) {
    if (data) {
        var res = {commercial: [], home: []};
        data.forEach(function (obj) {
            if (obj.type == 'commercial') {
                res.commercial.push(obj)
            } else {
                res.home.push(obj)
            }
        });
        res.commercial = separateDataByActiveInactive(res.commercial);
        res.home = separateDataByActiveInactive(res.home);
        return res;
    }
};

export var separateDataByActiveInactive = function (data) {
    var res = {active: [], inactive: []};
    data.forEach(function (obj) {
        if (obj.active) {
            res.active.push(obj)
        } else {
            res.inactive.push(obj)
        }
    });
    return res;
};