import Reflux from 'reflux';


import actions from '../../Actions/Rent/GetUsers'
import dataHandler from '../../Stores/Rent/DataHandler'

let users = {allRealty: undefined, myRealty: undefined};

export default Reflux.createStore({
    listenables: actions,
    getInitialState(){
        return (users);
    },
    onGetAllUsers(data){
        users.allRealty = data;
        this.trigger(users);
    },
    onGetMyUsers(data){
        users.myRealty = data;
        this.trigger(users);
    }


})