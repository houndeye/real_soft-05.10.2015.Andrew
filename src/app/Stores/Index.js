import Reflux from 'reflux';
import actions from '../Actions/Index';
import * as ajax from '../helper/ajax';

import loginPage from '../Components/FirstLoad'
import sitePage from '../Components/page'

let siteBody = {
    loginPage: loginPage,
    sitePage: sitePage
};

export default Reflux.createStore({
    listenables: [actions],
    getInitialState(){
        return {body: siteBody.loginPage}
    },
    onEnter(boolean){
        if (boolean) {

            window.location.pathname = '/aliga';
            this.trigger({body: null})
        }
    }
});