import React from 'react'
import Reflux from 'reflux'


import InputSelect from '../../../../helper/InputSelect';

import actions from '../../../../Actions/MyOffice/Realty/RealtyParams'

import store from '../../../../Stores/MyOffice/Realty/RealtyAdditional'
import inputStore from '../../../../Stores/MyOffice/Realty/View/Inputs'
export default React.createClass({
    mixins: [Reflux.connect(store), Reflux.connect(inputStore)],
    getDefaultProps(){
        return (
        {
            default: "Office",
            realtyKind: {Office: 0, Shop: 1, Warehouse: 2, Cafe: 3, Restaurant: 4}
        })
    },
    onChange(eventKey){
        this.setState({key: eventKey});
        var kind = this.props.content.types[this.props.realtyKind[eventKey]][this.props.language];
        actions.selectRealtyType(this.props.type, kind, this.props.content[eventKey], this.props.language);
    },
    componentWillMount(){
        this.setState({key: this.props.default});
        var kind = this.props.content.types[this.props.realtyKind[this.props.default]][this.props.language];

        actions.selectRealtyType(this.props.type, kind, this.props.content[this.props.default], this.props.language);
    },

    //componentDidMount(){
    //
    //},
    componentWillUpdate(){
        if (this.state.inputData) {
            this.setState({key: this.state.inputData.kind});
            actions.selectRealtyType(this.props.type, this.state.inputData.kind, this.props.content[this.props.default], this.props.language);
            this.setState({inputData: undefined})
        }
    },


    render(){
        return (<div>
            <InputSelect first={this.state.key}
                         readable={this.state.readable} data={this.props.content.types} language={this.props.language}
                         onChange={this.onChange}/>

        </div>)
    }
})
