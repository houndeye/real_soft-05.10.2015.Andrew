import React from 'react';
import Reflux from 'reflux';

import actions from '../../../Actions/Map'
import dbActions from '../../../Actions/MyOffice/Realty/realtyDb'

//import realtyDbSave from '../../../Stores/MyOffice/realtyDb'
import store from '../../../Stores/Map'
import inputStore from '../../../Stores/MyOffice/Realty/View/Inputs'

import NewMap from '../../../helper/NewMap'
import AddressForm from '../../../helper/AddressForm'
import Info from '../Realty/View/Index'

export default React.createClass({
    mixins: [Reflux.connect(store), Reflux.connect(inputStore)],
    render: function () {
        console.log(this.state);

        return (<div >
                <NewMap RefluxAction={actions.sendAddressArr} dbActions={dbActions.getRealtyCoordinate}
                        place={this.state.coordinate}/>
                { this.state.address ? (<AddressForm addressArr={this.state.addressArr} address={this.state.address}
                                                     labels={this.props.content.addressForm}
                                                     language={this.props.language}
                                                     dbActions={dbActions.getRealtyAddress}/>) : (
                    <AddressForm addressArr={this.state.addressArr} labels={this.props.content.addressForm}
                                 language={this.props.language}
                                 dbActions={dbActions.getRealtyAddress}/>)}
                {this.state.inputData ? (
                    <Info content={this.props.content} data={this.state.inputData} language={this.props.language}/>) :
                    (<Info content={this.props.content} data={this.state.inputData} language={this.props.language}/>)}
            </div>
        )
    }
});