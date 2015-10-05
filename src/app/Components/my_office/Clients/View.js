import React from 'react';
import Reflux from 'reflux';

import actions from '../../../Actions/Map'
import dbActions from '../../../Actions/MyOffice/Client/clientDb'

//import realtyDbSave from '../../../Stores/MyOffice/realtyDb'
import inputStore from '../../../Stores/MyOffice/Client/View/Inputs'


import Info from '../Clients/View/Index'

export default React.createClass({
    mixins: [Reflux.connect(inputStore)],
    render: function () {
        console.log(this.props);

        return (<div >
                <Info content={this.props.content} data={this.state.inputData} language={this.props.language}/>
            </div>

        )
    }
});