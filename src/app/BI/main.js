import * as view from '../Components/index';
import * as ajax from '../helper/ajax';

//route path
let login = 'login';

ajax.getData(login).forEach(x=> view.render(x));

//ajax.getData('/').forEach(x=> ajax.sendDataQ('aliga',x));
//ajax.getData('/').forEach(x=> ajax.sendDataQ('dataPost',x));
