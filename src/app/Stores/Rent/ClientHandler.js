import Reflux from 'reflux';

import actions from '../../Actions/Rent/ClientHandler';
import clientActions  from '../../Actions/Rent/GetClients';

let clients = {commercial: [], home: []};

export default Reflux.createStore({
    listenables: actions,
    onSetClients(data){
        clients.commercial = [];
        clients.home = [];
        data.forEach(function (element, i) {
            if (element.type == 'commercial') {
                clients.commercial.push(element);
            } else {
                clients.home.push(element);
            }
        });
        this.trigger(clients);
    },
    onHandleClients(type, parameters){

        var res = [];
        clients[type].forEach(function (element, i) {
            if ((element.minPrice >= parameters.price.min && element.maxPrice >= parameters.price.max)
                && ((element.area >= parameters.area.min && element.area <= parameters.area.max) )
                && (element.rooms ? (element.rooms >= parameters.rooms.min && element.rooms <= parameters.rooms.max) : true )
                && (element.floor ? (element.floor >= parameters.floor.min && element.floor <= parameters.floor.max) : true )
            ) {
                res.push(element);
            }
        });
        console.log(res);
        clientActions.getClients(res);
    },
    onSearchClients(parameters){
        var res = [];
        clients[parameters.type].forEach(function (element, i) {
            if (element.minPrice <= parameters.price && element.maxPrice >= parameters.price) {
                res.push(element);
            }
        });
        console.log(res);
        clientActions.getClients(res);
    }

})
