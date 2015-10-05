import Reflux from 'reflux';

import actions from '../../../Actions/MyOffice/Client/ClientMainInfo';


let view = {view: false};
let readable = {readable: true};

export default Reflux.createStore({

    listenables: actions,
    getInitialState(){
        return (
            view, readable
        )

    },
    onView(){
        view.view = true;
        this.trigger(view)
    },
    onCloseView(){
        view.view = false;
        this.trigger(view)
    },
    onChangeReadableWritableView(boolean){
        readable.readable = boolean;
        this.trigger(readable)
    }


})