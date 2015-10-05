import React from 'react';
import Reflux from 'reflux';

import PanelTemplate from '../../../helper/ClientPanelRightButton'
import View from '../Clients/View'


import store from '../../../Stores/MyOffice/Client/ClientMainInfo'
//import dbStore from '../../../Stores/dbRealtyActions'


import actions from '../../../Actions/MyOffice/Client/ClientAdditional'
import clientDb from '../../../Actions/MyOffice/Client/clientDb'
import dbClientActions from '../../../Actions/dbClientActions'
import inputActions from '../../../Actions/MyOffice/Client/View/Inputs'
import buttonActions from '../../../Actions/MyOffice/Client/View/ClientView'

//import realtyDbActions from '../../../Actions/dbRealtyActions'

export default React.createClass({
    mixins: [Reflux.connect(store)],
    getDefaultProps(){
        return {
            "Style": {
                "width": {width: '100%', display: 'inline-block', cursor: "default"},
                "displayInline": {display: 'inline-block'},
                "bg": {backgroundColor: "#d9edf7", color: "5E6061"}
            }

        };
    },
    onView(data){
        actions.closeView();
        buttonActions.view();
        actions.view();
        inputActions.setInput(data);

    },
    onRemove(data){
        buttonActions.exit();
        clientDb.removeClient(data._id);
    },
    onChangeActiveParam(data){
        buttonActions.exit();
        clientDb.changeClientActiveParam(data)
    },
    render: function () {
        return (

            <aside className="col-sm-6 scroll">
                {this.state.view ? (<View readable={this.state.readable} content={this.props.content}
                                          language={this.props.language}/>) :
                    this.props.clients[0] ? (
                        <PanelTemplate realty={this.props.clients} data={this.props.data} labels={this.props.labels}
                                       language={this.props.language}
                                       Style={this.props.Style}
                                       click={[this.onView,this.onRemove,this.onChangeActiveParam]}/>) : ""}

            </aside>
        )
    }

});



