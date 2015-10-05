import Reflux from 'reflux';

import actions from '../../../Actions/MyOffice/User/Index'

let user = {user: undefined};
export default Reflux.createStore({
    listenables: actions,
    getInitialState(){
        return (
            user
        )
    },
    onFindUser(data){
        user.user = data;
        this.trigger(user);
    }

})