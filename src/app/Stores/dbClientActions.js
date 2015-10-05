import Reflux from 'reflux';

import actions from '../Actions/dbClientActions'


import * as ajax from '../helper/ajax'

import myOfficeAction from '../Actions/MyOffice/GetAllUserClients'



export default Reflux.createStore({
    listenables: actions,
    onFindAllActiveClients(func){
        ajax.DbRequest('ClientFind', 'findAllActiveClients', {})
            .done(function (data, xhr) {
                if (xhr == 'success')
                    func(data);
            }.bind(this)
        );
    },
    onFindAllUserClients (){
        ajax.DbRequest('ClientFind', 'findAllUserClients', {})
            .done(function (data, xhr) {
                if (xhr == 'success')
                    myOfficeAction.getAllUserClients(data);
            }.bind(this)
        );
    },
    onFindAllActiveClientsWithParams(){

    }

})