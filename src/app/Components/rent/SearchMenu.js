import React from 'react';
import Reflux from 'reflux'


import store from '../../Stores/Rent/RentSearchMenu';


import realtyDbActions from '../../Actions/dbRealtyActions';


import dbRealtyStore from '../../Stores/dbRealtyActions';


export default  React.createClass({
    mixins: [Reflux.connect(store), Reflux.connect(dbRealtyStore)],
    componentWillMount(){
        // this.setState({realty: {allActiveRealty: this.state.realty.allActiveRealty}});
        //realtyDbActions.findAllActiveRealty();

    },
    render() {
        // console.log(this.state);
        return (
            <div>
                {this.state.menu ? React.createElement(this.state.menu, this.state.props) : " "}
            </div>
        )

    }

});