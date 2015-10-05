import Reflux from 'reflux';
import actions from  '../../../../Actions/MyOffice/Realty/View/RealtyType';


let optionRealtyContent = {content: undefined, props: undefined};
let tmp;
export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return {optionRealtyContent};
    },
    onSelectRealtyType(type, content, language){

        optionRealtyContent.content = menuContent[type];
        optionRealtyContent.props = {content: content, realtyType: type, language};
        this.trigger({optionRealtyContent});
    }

});


