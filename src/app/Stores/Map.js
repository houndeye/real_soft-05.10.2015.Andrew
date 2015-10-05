import Reflux from 'reflux';

import actions from '../Actions/Map'



export default Reflux.createStore({
    getInitialState(){
        return ({
            addressArr: "",
            address: "",
            coordinate: ""
        })
    },
    listenables: [actions],
    onSendAddressArr(obj){
        this.trigger({
            addressArr: obj
        });
    },
    onSendAddress(obj){
        this.trigger({
            address: obj
        });
    },
    onSendMapCoordinate(obj){
        this.trigger({
            coordinate: obj
        });
    }
});