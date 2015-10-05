import Reflux from 'reflux';

import action from '../../../../Actions/MyOffice/Realty/View/GetRealtyImg'

let realtyImg = {realtyImg: undefined};
export default Reflux.createStore({
    listenables: action,
    getInitialState(){
        return (
            realtyImg
        )
    },
    onGetRealtyImg (data){
        console.log(data);
        if (data == []) {
            realtyImg.realtyImg = undefined;
        } else {
            realtyImg.realtyImg = data;
        }
        this.trigger(realtyImg);
    }

})