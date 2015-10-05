import * as view from '../Components/mainPage';
import * as ajax from '../helper/ajax';

//route path
let login = 'login';

ajax.getData(login).forEach(x=> view.render(x));

