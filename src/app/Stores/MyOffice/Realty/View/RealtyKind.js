import Reflux from 'reflux';


import actions from  '../../../../Actions/MyOffice/Realty/View/RealtyKind';


import commercial from "../../../../Components/my_office/Realty/View/Commercial"
import home from "../../../../Components/my_office/Realty/View/Home"


let menuContentType = {
    "commercial": commercial,
    "home": home
};
let tmp;
let menuContent = {content: undefined, props: undefined};
export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return {menuContent};
    },
    onSelectMenuType(type, content, language){

        menuContent.content = menuContentType[type];
        menuContent.props = {content: content[type], language, type: type};
        this.trigger({menuContent});
    }

});

