import Reflux from 'reflux';

import actions from '../../../Actions/MyOffice/User/userDb.js'
import user from '../../../Actions/MyOffice/User/Index'

import * as ajax from '../../../helper/ajax'
let u = {user: undefined};
export default Reflux.createStore({
    listenables: actions,
    getInitialState(){
        return (
            u
        )
    },
    onUpdateUser(userParams){
        ajax.DbRequest('User', 'update', userParams)
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    setTimeout(u.findUser, 300);
                }
            });

    },
    onRemoveUser(data){
        u.user = data;
        this.trigger(u);
    }

})