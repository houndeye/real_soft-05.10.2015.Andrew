import React from 'react'
import Reflux from 'reflux'
import RB from 'react_bootstrap'

var Button = RB.Button;

import actions from '../../../../Actions/MyOffice/Client/View/ClientView'

import store from '../../../../Stores/MyOffice/Client/View/ClientView'
import inputStore from '../../../../Stores/MyOffice/Client/View/Inputs'

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
            {this.state.viewProps ? (<Button onClick={this.onClick}>{this.props.buttons[name][language]}</Button>) : ""}
            {this.state.viewProps ? (
                <Button onClick={this.onClickExit}> {this.props.buttons.exit[language]}</Button>) : ""            }
        </div>)
    }
})
