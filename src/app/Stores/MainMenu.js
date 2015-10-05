import Reflux from 'reflux';
import actions from  '../Actions/MainMenu';
import {getPageName} from '../helper/storeHelper'

import IndexRent from '../Components/rent/Index';
import IndexSale from '../Components/sale/index';
import IndexDailyRent from '../Components/daily_rent/Index';
import IndexMoreService from '../Components/more_service/Index';
import IndexForum from '../Components/forum/Index';
import IndexMyOffice from '../Components/my_office/Index';


let pages = new Map([
    ['rent', IndexRent],
    ['sale', IndexSale],
    ['daily rent', IndexDailyRent],
    ['more service', IndexMoreService],
    ['forum', IndexForum],
    ['my office', IndexMyOffice]
]);


//at first time loaded sale page
let pageName = "sale";
let page = {view: "sale", props: undefined};
/**
 *handle key string of element and then return page name which we want to load
 * @param str
 * @returns {*}
 */



export default  Reflux.createStore({


    listenables: [actions],
    getPage  (pageName) {
        return pages.get(pageName);
    },
    onSelect (elementKey, content, language) {
        console.log(elementKey, content, language);
        page.view = this.getPage(elementKey);
        page.props = {"content": content, "language": language};
        this.trigger({page});


    },
    getInitialState() {
        page.view = this.getPage(pageName);
        return {page};
    }


});


//export let store_2 = Reflux.createStore({
//    init(){
//        this.listenTo(actions.changeLanguage, this.onChangeLanguage)
//    },
//    onChangeLanguage (content) {
//        this.trigger({'content': content});
//
//    },
//    getInitialState() {
//        return {'content': undefined};
//    }
//});
//let pagesName = ['rent', 'sale', 'daily_rent', 'more_service', 'forum', 'my_office'];
//let isSelected = {};
// export let store_2 = Reflux.createStore({
//    init(){
//        this.listenTo(actions.select, this.onSelect)
//    },
//    // listenables: [actions],
//    getIsSelected(pageName){
//        pagesName.forEach(function (el) {
//            if (el != pageName) {
//                isSelected[el] = false;
//            }
//            else {
//                isSelected[el] = true;
//            }
//        });
//    },
//    onSelect (elementKey) {
//        // var pageName = getPageName(elementKey, pagesName);
//        this.getIsSelected(elementKey);
//        console.log(isSelected)
//        this.trigger({isSelected});
//
//    },
//    getInitialState() {
//        //this.getIsSelected(pageName);
//        return {'isSelected': isSelected};
//    }
//});