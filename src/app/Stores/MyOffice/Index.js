import Reflux from 'reflux';


import actions from  '../../Actions/MyOffice/Index';


import Realty from "../../Components/my_office/Realty/Index"
import ClientList from "../../Components/my_office/Clients/Index"
import PersonalData from "../../Components/my_office/PersonalData/Index"

let pageContentType = {
    "realty": Realty,
    "clientList": ClientList,
    "personalData": PersonalData

};

let pageContent = {content: undefined, props: undefined};

export default  Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return {pageContent};
    },
    onChangePageContent(type, content, language){
        pageContent.content = pageContentType[type];
        pageContent.props = {content, language};
        this.trigger({pageContent});
    }
});

