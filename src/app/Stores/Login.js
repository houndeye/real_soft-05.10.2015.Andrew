import Reflux from "reflux";
import * as ajax from '../helper/ajax';

import actionsIndex  from "../Actions/Index"
import actions from "../Actions/Login"
import login from "../Components/login"
import register from "../Components/Register"


let firstPage = {
    "login": login,
    "register": register
};

export default Reflux.createStore({
    listenables: [actions],
    getInitialState()
    {
        return {
            formBody: firstPage["login"],
            active: "login"
        }
    },
    onChange(key){
        if (key) {
            //ajax.sendData(firstPage[key],'/aliga');
            //    href.path='/aliga';
            this.trigger({
                formBody: firstPage[key],
                active: key
            })
        }
    },
    onLogin(username, password){
        var user = {username, password};
        console.log(user);
        ajax.sendJson('login', user, function (err, res) {
            if (err) {
                console.log(err)
            } else {
                console.log(res);
            }
        }).done(function (res) {
            actionsIndex.enter(res)
        });


    }


})