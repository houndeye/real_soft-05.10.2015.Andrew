import Reflux from 'reflux';

import actions from '../../../../Actions/MyOffice/Realty/View/Inputs';

var inputData = {inputData: undefined};
export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return (
            inputData
        )
    },
    onSetInput(data){
        inputData.inputData = data;
        this.trigger(inputData);
    }
})