import Reflux from 'reflux';

import actions from '../Actions/dbRealtyActions'
import myOfficeImgActions from '../Actions/MyOffice/Realty/ImageDb'
import rentImgActions from '../Actions/Rent/ImageHandler'

import * as ajax from '../helper/ajax'

import myOfficeViewAction from '../Actions/MyOffice/Realty/View/GetRealtyImg'
import myOfficeAction from '../Actions/MyOffice/GetAllUserRealty'
import setRentParameters from '../Actions/Rent/GetParameters'


export default Reflux.createStore({

    listenables: actions,
    onGetStartSliderOptions(){

        ajax.DbRequest('initStartOptions', {}, {})
            .done(function (data, xhr) {
                if (xhr == 'success') {
                    setRentParameters.getSliderParameters(data)
                }
            }.bind(this));

    },
    onFindAllActiveRealty(func){

        ajax.DbRequest('RealtyFind', 'findAllActiveRealty', {})
            .done(function (data, xhr) {
                if (xhr == 'success')
                    func(data);
            }.bind(this)
        );
    },
    onFindAllUserRealty (){

        ajax.DbRequest('RealtyFind', 'findAllUserRealty', {})
            .done(function (data, xhr) {
                if (xhr == 'success')
                    myOfficeAction.getAllUserRealty(data);
            }.bind(this)
        );
    },
    onFindAllActiveRealtyWithParams(params, func){
        console.log(params);
        ajax.DbRequest('RealtyFind', 'findAllActiveRealtyWithParams', params)
            .done(function (data, xhr) {
                if (xhr == 'success')
                    func(data);
            }.bind(this)
        );

    },
    onGetRealtyImg(realtyId){
        ajax.DbRequest('RealtyFind', 'getImg', realtyId)
            .done(function (data) {
                myOfficeImgActions.setImagesId(data);
                myOfficeViewAction.getRealtyImg(data);
            }.bind(this)
        );
    },
    onGetAllImages(){
        ajax.DbRequest('RealtyFind', 'getAllImages', {})
            .done(function (data) {
                rentImgActions.setImages(data);
            }.bind(this)
        );
    }
})