import React from 'react'
import Reflux from 'reflux'
import RB from 'react_bootstrap'

var Button = RB.Button;

import actions from '../../../../Actions/MyOffice/Realty/View/RealtyView'

import store from '../../../../Stores/MyOffice/Realty/View/RealtyView'
import inputStore from '../../../../Stores/MyOffice/Realty/View/Inputs'

export default React.createClass({
    mixins: [Reflux.connect(store), Reflux.connect(inputStore)],
    onClick(){

        if (this.state.inputData) {
            this.state.viewProps.action(this.state.inputData);
        } else {
            this.state.viewProps.action();
        }
    },
    onClickExit(){
        actions.exit();
    },
    render(){
        var language = this.props.language,
            name = this.state.viewProps.buttonName;
        return (<div>
            <Button onClick={this.onClick}>{this.props.buttons[name][+language]}</Button>
            <Button onClick={this.onClickExit}> {this.props.buttons.exit[language]}</Button>
        </div>)
    }
})
