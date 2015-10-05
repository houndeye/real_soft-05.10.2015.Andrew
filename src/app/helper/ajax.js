import Rx from 'rx';
function getAjax() {
    var xml = null;
    try {
        xml = new XMLHttpRequest();
    } catch (e) {
    }

    try {
        xml = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
    }

    try {
        xml = new XMLHttpRequest('Microsoft.XMLHTTP');
    } catch (e) {
    }

    return xml;
}

export function getData(path) {

    var response = new Rx.Observable.create((res)=> {
            var request = getAjax();
    request.open('GET', path, true);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                res.onNext(request.responseText);
            }
            else {
                console.log('error ' + request.responseText + ' ' + request.status);
            }
        }
    };
    request.send();

});

return response;

//return response.then(function (data) {
//    return data;
//}).catch(function (err) {
//    console.error(err);
//});
}
import $ from 'jquery';


export function sendDataQ(path, data) {
    $.ajax({
        url: path,
        dataType: 'html',
        type: 'POST',
        data: data
    })
}
export function sendJson(path, data) {
    if (data) {
        return $.ajax({
            url: path,
            type: 'POST',
            // data:JSON.stringify(data) ,
            data:data,
            dataType: 'json'
        })

    } else {


        $.ajax({
            url: path,
            type: 'POST'
        });

    }

}
export function sendImg(path, data, callback) {
    $.ajax({
        url: path,
        type: 'POST',
        data: data,
        success: function (data) {

            callback(null, data)
        },
        dataType: "image"
    })
}
export function dbRequest(path, data, callback) {
    return $.ajax({
        url: path,
        type: 'POST',
        data: data,
        success: function (data) {
            callback(null, data)
        }
    })
}

export function sendRequest(path, requestType, data) {
    return $.ajax({
        url: path,
        type: 'POST',
        data: {requestType, data},
        success: function (data) {
            console.log(data);

        },
        dataType: 'json'
    })
}


export function DbRequest(path, queryType, queryParams) {
    return $.ajax({
        url: path,
        type: 'POST',
        data: {queryType, queryParams},
        dataType: 'json'
    })
}

export function SendImg(path, queryType, queryParams, images) {
    return $.ajax({
        url: path,
        type: 'POST',
        data: {queryType, queryParams, images: JSON.stringify(images)},
        dataType: 'json'
    })
}