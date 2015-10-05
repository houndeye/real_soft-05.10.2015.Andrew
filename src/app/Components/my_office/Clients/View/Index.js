import React from 'react'
import Reflux from 'reflux'
import RB from 'react_bootstrap'



import store from '../../../../Stores/MyOffice/Client/View/RealtyKind'
import store2 from '../../../../Stores/MyOffice/Client/RealtyParams'
import store3 from '../../../../Stores/MyOffice/Client/ClientAdditional'
import inputStore from '../../../../Stores/MyOffice/Client/View/Inputs'

import actions from '../../../../Actions/MyOffice/Client/View/RealtyKind'
import dbActions from '../../../../Actions/MyOffice/Client/clientDb'

import InputSelect from '../../../../helper/InputSelect';
import Buttons from './Buttons';


export default React.createClass({
    mixins: [Reflux.connect(store), Reflux.connect(store2), Reflux.connect(store3), Reflux.connect(inputStore)],
    getDefaultProps()
    {
        return (
        {
            default: "commercial"
        })

    },
    onChange(eventKey)
    {
        // console.log(eventKey)
        this.setState({key: eventKey});
        actions.selectMenuType(eventKey, this.props.content, this.props.language);
    },
    onChange2(eventKey)
    { //console.log(eventKey)
        var key;
        this.props.content.regions.forEach(function (el) {
            if (el[0] == eventKey) {
                key = el[this.props.language];
            }
        }.bind(this));
        this.setState({region: key});
    },
    onClick()
    {
        dbActions.saveRealty()
    },

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

    render(){
        return (
            <div>
                <InputSelect readable={this.state.readable} data={this.props.content.regions}
                             language={this.props.language}
                             onChange={this.onChange2}
                    />
                <InputSelect first={this.state.key}
                             readable={this.state.readable} data={this.props.content.types}
                             language={this.props.language}
                             onChange={this.onChange}/>
                {this.state.menuContent.content ? React.createElement(this.state.menuContent.content, this.state.menuContent.props) : " "}
                {this.state.optionRealtyContent.content ? React.createElement(this.state.optionRealtyContent.content, {
                    content: this.state.optionRealtyContent.props,
                    region: this.state.region || this.props.content.regions[0][this.props.language]
                }) : " "}
                <Buttons buttons={this.props.content.buttons} language={this.props.language}/>
            </div>
        )
    }
})
//{this.state.optionRealtyContent.content ? React.createElement(this.state.optionRealtyContent.content, this.state.optionRealtyContent.props) : " "}