import React from 'react';
import Reflux from 'reflux';

import PanelTemplate from '../../../helper/PanelMyOffice'
import View from '../Realty/View'


import store from '../../../Stores/MyOffice/Realty/RealtyMainInfo'

import actions from '../../../Actions/MyOffice/Realty/RealtyAdditional'
import mapActions from '../../../Actions/Map'
import realtyDb from '../../../Actions/MyOffice/Realty/realtyDb'
import dbRealtyActions from '../../../Actions/dbRealtyActions'
import inputActions from '../../../Actions/MyOffice/Realty/View/Inputs'
import buttonActions from '../../../Actions/MyOffice/Realty/View/RealtyView'

var style = {maxHeight: 500, overflow: "auto"};
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
        dbRealtyActions.getRealtyImg(data._id);
        actions.closeViewRealty();
        buttonActions.view();
        actions.viewRealty();
        mapActions.sendAddress(data.address);
        mapActions.sendMapCoordinate(data.mapCoordinates);
        inputActions.setInput(data);

    },
    onRemove(data){
        buttonActions.exit();
        realtyDb.removeRealty(data._id);
    },
    onChangeActiveParam(data){
        buttonActions.exit();
        realtyDb.changeRealtyActiveParam(data)
    },
    render: function () {
        return (

            <aside className="col-sm-6 scroll">
                {this.state.view ? (<View readable={this.state.readable} content={this.props.content.view}
                                          language={this.props.language}/>) :
                    this.props.realty[0] ? (
                        <PanelTemplate realty={this.props.realty} data={this.props.data} labels={this.props.labels}
                                       language={this.props.language}
                                       Style={this.props.Style}
                                       click={[this.onView,this.onRemove,this.onChangeActiveParam]}/>) : ""}

            </aside>
        )
    }

});



