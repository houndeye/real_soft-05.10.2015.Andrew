import Reflux from 'reflux';

import actions from  '../../Actions/Rent/RentSearchMenu';

import home from "../../Components/rent/SearchMenuHome";
import commercial from "../../Components/rent/SearchMenuCommercial";

let searchMenuTypes = {
    "home": home,
    "commercial": commercial

};

let searchMenu = {searchMenu: undefined, props: undefined};
export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return searchMenu;
    },
    onChangeSearchMenu(type, content, language){
        searchMenu.menu = searchMenuTypes[type];
        searchMenu.props = {
            content: content.menu[type],
            labels: content.menu.labels,
            regions: content.menu.regions,
            language
        };
        this.trigger(searchMenu);
    }

});