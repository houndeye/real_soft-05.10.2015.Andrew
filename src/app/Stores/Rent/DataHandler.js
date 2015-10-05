import Reflux from "reflux";

import actions from "../../Actions/Rent/DataHandler";

import getUsers from '../../Actions/Rent/GetUsers'

let realty = {commercial: [], home: []};
let images = [];
let parameters = {};
export default Reflux.createStore({
    listenables: [actions],
    //getInitialState(){
    //
    //    return (realty);
    //},
    onSetSliderParams(data){

        parameters = data;
        this.trigger(parameters);
    },
    onSetImages(data){
        images = data;
        this.trigger(images)
    },
    onSetRealty(data){
        realty.commercial = [];
        realty.home = [];
        data.forEach(function (element, i) {
            if (element.type == 'commercial') {
                realty.commercial.push(element);
            } else {
                realty.home.push(element);
            }
        });
        this.trigger(realty);
    },
    onHandleRealty(type){

        //  console.log(parameters);
        var res = [];
        realty[type].forEach(function (element, i) {
            if (((element.price >= parameters.price.min && element.price <= parameters.price.max) )
                && ((element.area >= parameters.area.min && element.area <= parameters.area.max) )
                && (element.rooms ? (element.rooms >= parameters.rooms.min && element.rooms <= parameters.rooms.max) : true )
                && (element.floor ? (element.floor >= parameters.floor.min && element.floor <= parameters.floor.max) : true )
            ) {
                res.push(element);
            }
        });
        //  console.log(res);
        getUsers.getAllUsers(res);
    }

});