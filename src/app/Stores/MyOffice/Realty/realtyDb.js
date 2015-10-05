import Reflux from 'reflux'

import imageStore from '../../../Stores/MyOffice/Realty/ImageDb'

import imageActions from '../../../Actions/MyOffice/Realty/ImageDb';
import actions from '../../../Actions/MyOffice/Realty/realtyDb'
import dbRealtyActions from '../../../Actions/dbRealtyActions'

import * as ajax from '../../../helper/ajax'
let Params = {mapCoordinates: "", address: "", params: ""};

function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}
export default Reflux.createStore({
    listenables: [actions],
    onGetRealtyCoordinate(coordinate){

        Params.mapCoordinates = coordinate;
    },
    onGetRealtyAddress(address){

        Params.address = address;
    },
    onGetRealtyParams(params){
        Params.params = params;
    },
    //onGetRealtyImg(imgsId){
    //    ajax.DbRequest('RealtyFind', 'getImg', imgsId)
    //        .done(function (data) {
    //            if (err) {
    //                console.log(err)
    //            }
    //            console.log(data)
    //        }
    //    )
    //
    //},
    getRealtyParams(){
        var realtyParams = {};
        realtyParams = jsonConcat(realtyParams, Params.params);
        realtyParams.address = Params.address;
        realtyParams.mapCoordinates = Params.mapCoordinates;
        return realtyParams;
    },
    validateRealtyParams(param){
        var keys = ['address', 'mapCoordinates', 'price', 'area'];
        var bool = true;
        keys.forEach(function (key) {
            console.log(param[key]);
            if (!param[key]) {
                bool = false;
            }
        });
        return bool
    },
    onSaveRealty(){
        var realtyParams = this.getRealtyParams();
        if (this.validateRealtyParams(realtyParams)) {
            ajax.DbRequest('Realty', 'save', realtyParams)
                .done(function (data, xhr) {

                    if (xhr == 'success') {

                        imageActions.saveImages(data._id);
                        setTimeout(dbRealtyActions.findAllUserRealty, 300);
                    }
                });
        }
    },

    onChangeRealtyActiveParam(params){
        ajax.DbRequest('Realty', 'switch', params)
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    setTimeout(dbRealtyActions.findAllUserRealty, 300);
                }
            });
    },

    onUpdateRealty(realtyData){

        var realtyParams = this.getRealtyParams();
        var realtyId = realtyData._id;

        ajax.DbRequest('Realty', 'update', {realtyParams, realtyId})
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    imageActions.updateImages();
                    setTimeout(dbRealtyActions.findAllUserRealty, 300);
                }
            });

    },
    onRemoveRealty(realtyId)   {
        ajax.DbRequest('Realty', 'remove', realtyId)
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    imageActions.removeImages();
                    setTimeout(dbRealtyActions.findAllUserRealty, 300);
                }
            });
    }

})