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


}
export function sendData(path, data) {
    console.log(data);
    var request = getAjax();
    request.open('POST', path, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send(data);

}
//import request from 'superagent'
//var request = require('superagent');
//var url = 'https://github.com/visionmedia/superagent/blob/master/examples/simple-get.js';
//
//export function login(data) {
//    var url ='/login';
//    request.post('url')
//        .set('Content-Type', 'application/json')
//        .send(data)
//
//       .end()
//}