import Reflux from 'reflux';

import action from '../../Actions/MyOffice/GetAllUserRealty'

let userRealty = {userRealty: undefined};
export default Reflux.createStore({
    listenables: action,
    getInitialState(){
        return (
            userRealty
        )
    },
    onGetAllUserRealty (data){
        userRealty.userRealty = data;
        this.trigger(userRealty);
    }

})