export function getPageName(str, arr) {

    var res = arr.map(function (value) {
        var begin = str.indexOf(value);
        let res = str.slice(begin);
        if (begin > 0) {
            res = res.slice(0, value.length);
            console.log(res, 3);
            return res;
        }
        return undefined;


    });

    return res[getMaxIndex(res)];

}

function getMaxIndex(arr) {
    var index = 0;
    var middleValue = "";
    arr.forEach(function (value, i) {
        if (value != undefined) {

            if (middleValue.length <= value.length) {
                middleValue = value;
                index = i;
            }
        }
    });
    return index;
}