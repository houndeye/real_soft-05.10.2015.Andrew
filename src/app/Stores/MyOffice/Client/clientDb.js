import Reflux from 'reflux'

import actions from '../../../Actions/MyOffice/Client/clientDb'
import dbClientActions from '../../../Actions/dbClientActions'

import * as ajax from '../../../helper/ajax'
let Params = {params: ""};

function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}
export default Reflux.createStore({
    listenables: [actions],

    onGetRealtyParams(params){
        console.log(params);
        Params.params = params;
    },

    getRealtyParams(){
        var realtyParams = {};
        realtyParams = Params.params;

        return realtyParams;
    },
    validateRealtyParams(param){
        var keys = ['minPrice', 'maxPrice', 'area'];
        var bool = true;
        keys.forEach(function (key) {
            if (!param[key]) {
                bool = false;
            }
        });
        return bool
    },
    onSaveClient(){
        var realtyParams = this.getRealtyParams();
        console.log(realtyParams);
        if (this.validateRealtyParams(realtyParams)) {
            ajax.DbRequest('Client', 'save', realtyParams)
                .done(function (data, xhr) {
                    console.log(data);
                    if (xhr == 'success') {
                        setTimeout(dbClientActions.findAllUserClients, 300)
                    }
                });
        }
    },

    onChangeClientActiveParam(params){
        ajax.DbRequest('Client', 'switch', params)
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    setTimeout(dbClientActions.findAllUserClients, 300)
                }
            });
    },

    onUpdateClient(clientData){

        var clientParams = this.getRealtyParams();
        var clientId = clientData._id;
        ajax.DbRequest('Client', 'update', {clientParams, clientId})
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    setTimeout(dbClientActions.findAllUserClients, 300)
                }
            });

    },
    onRemoveClient(clientId)   {
        ajax.DbRequest('Client', 'remove', clientId)
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    setTimeout(dbClientActions.findAllUserClients, 300)
                }
            });
    }

})