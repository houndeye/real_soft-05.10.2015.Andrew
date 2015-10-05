import Reflux from "reflux";

import actions from "../../Actions/Rent/GetParameters";


let parameters = {slider: undefined};
export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        console.log(parameters);
        return {parameters};
    },
    onGetSliderParameters(data){
        parameters.slider = data;
        console.log(parameters);
        this.trigger(parameters);
    }

});