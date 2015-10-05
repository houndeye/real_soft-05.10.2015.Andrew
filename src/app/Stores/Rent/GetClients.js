import Reflux from 'reflux'


import actions from '../../Actions/Rent/GetClients';

import clientStore from '../../Stores/Rent/ClientHandler';

let clients = {clients: []};
export default  Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return (
            clients
        )
    },
    onGetClients(data){
        clients.clients = data;
        this.trigger(clients);
    }
})