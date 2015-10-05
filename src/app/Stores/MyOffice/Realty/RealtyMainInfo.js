import Reflux from 'reflux';

import actions from '../../../Actions/MyOffice/Realty/RealtyMainInfo';


let view = {view: false};
let readable = {readable: true};

export default Reflux.createStore({

    listenables: actions,
    getInitialState(){
        return (
            view, readable
        )

    },
    onViewRealty(){
        view.view = true;
        this.trigger(view)
    },
    onCloseViewRealty(){
        view.view = false;
        this.trigger(view)
    },
    onChangeReadableWritableView(boolean){
        readable.readable = boolean;
        this.trigger(readable)
    }


})