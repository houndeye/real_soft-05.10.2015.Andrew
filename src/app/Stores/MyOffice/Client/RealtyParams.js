import Reflux from 'reflux';
import actions from  '../../../Actions/MyOffice/Client/RealtyParams';


import Inputs from "../../../Components/my_office/Clients/View/Inputs"


let optionRealtyContent = {content: undefined, props: undefined};
export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return {optionRealtyContent};
    },
    onSelectRealtyType(type, realtyType, content, language){
        optionRealtyContent.content = Inputs;
        optionRealtyContent.props = {content, language, realtyType: realtyType, type: type};
        this.trigger({optionRealtyContent});
    }
});

