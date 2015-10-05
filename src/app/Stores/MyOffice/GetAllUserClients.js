import Reflux from 'reflux';

import action from '../../Actions/MyOffice/GetAllUserClients'

let userClients = {userClients: undefined};
export default Reflux.createStore({
    listenables: action,
    getInitialState(){
        return (
            userClients
        )
    },
    onGetAllUserClients (data){
        userClients.userClients = data;
        this.trigger(userClients);
    }

})