import Reflux from "reflux";

import actions from "../../Actions/Rent/ImageHandler";

let images = new Map();

export default Reflux.createStore({
    listenables: [actions],
    //getInitialState(){
    //
    //    return (realty);
    //},

    onSetImages(data){
        data.forEach(function (element, i) {
            images.set(element.realtyId, element)
        });
        this.trigger(images)
    },
    getImage(realtyId, callback){

        return images.get(realtyId)
    }

});