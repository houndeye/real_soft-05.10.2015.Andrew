import Reflux from 'reflux';

import actions from '../Actions/Register';
import actionsIndex  from "../Actions/Index"

import * as ajax from '../helper/ajax';


export default Reflux.createStore({

    listenables: [actions],
    getInitialState(){
        return {
            register: false,
            password: "",
            username: "",
            confirmPassword: "",
            errorLog: ""
        }
    },
    onConfirm(){

    },
    onRegister(username, password){
        var user = {username, password};
        ajax.sendJson('register', user, function (err, res) {
            if (err) {
                console.log(err)
            } else {
                console.log(res);
            }
        }).done(function (res) {
            actionsIndex.enter(res);
            this.trigger({register: false});
        }.bind(this));


    },
    onError(){

    }
})