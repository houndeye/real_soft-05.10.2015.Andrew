import React from 'react'
import Reflux from 'reflux'
import RB from 'react_bootstrap'



import store from '../../../../Stores/MyOffice/Realty/View/RealtyKind'
import store2 from '../../../../Stores/MyOffice/Realty/RealtyParams'
import store3 from '../../../../Stores/MyOffice/Realty/RealtyAdditional'
import inputStore from '../../../../Stores/MyOffice/Realty/View/Inputs'

import actions from '../../../../Actions/MyOffice/Realty/View/RealtyKind'
import dbActions from '../../../../Actions/MyOffice/Realty/realtyDb'

import InputSelect from '../../../../helper/InputSelect';
import Buttons from './Buttons'
var Button = RB.Button;


export default React.createClass({
    mixins: [Reflux.connect(store), Reflux.connect(store2), Reflux.connect(store3), Reflux.connect(inputStore)],
    getDefaultProps()
    {
        return (
        {
            default: "commercial"
        })

    }
    ,
    onChange(eventKey)
    {
        this.setState({key: eventKey});
        actions.selectMenuType(eventKey, this.props.content, this.props.language);
    }
    ,
    onClick()
    {
        dbActions.saveRealty()
    }
    ,

    componentWillMount()
    {
        this.setState({key: this.props.default});
        actions.selectMenuType(this.props.default, this.props.content, this.props.language);
    },

    componentWillUpdate(){
        if (this.state.inputData) {
            this.setState({key: this.state.inputData.type});
            actions.selectMenuType(this.state.inputData.type, this.props.content, this.props.language);
            this.setState({inputData: undefined})
        }
    },

    //componentWillUpdate(){
    //    if (this.state.inputData) {
    //
    //    }
    //},

    //if (this.state.inputData) {
    //    this.setState({key: this.state.inputData.type})
    //}pe})
    //}
    render(){
        return (
            <div>


                <InputSelect first={this.state.key}
                             readable={this.state.readable} data={this.props.content.types}
                             language={this.props.language}
                             onChange={this.onChange}/>
                {this.state.menuContent.content ? React.createElement(this.state.menuContent.content, this.state.menuContent.props) : " "}
                {this.state.optionRealtyContent.content ? React.createElement(this.state.optionRealtyContent.content, this.state.optionRealtyContent.props) : " "}
                <Buttons buttons={this.props.content.buttons} language={this.props.language}/>
            </div>
        )
    }
})
