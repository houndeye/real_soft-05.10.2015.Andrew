import Reflux from "reflux";

import actions from "../../Actions/Rent/ShowMainInfo";


let info = "";
export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return {info};
    },
    onClick(element){

        this.trigger({
            info: element
        })
    }

});