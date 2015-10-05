import React from 'react'
import Reflux from 'reflux'


import InputSelect from '../../../../helper/InputSelect';

import actions from '../../../../Actions/MyOffice/Client/RealtyParams'

import store from '../../../../Stores/MyOffice/Client/ClientAdditional'
import inputStore from '../../../../Stores/MyOffice/Client/View/Inputs'
export default React.createClass({
    mixins: [Reflux.connect(store), Reflux.connect(inputStore)],
    getDefaultProps(){
        return (
        {
            default: "Flat",
            realtyKind: {House: 0, Flat: 1, Room: 2}

        })

    }, onChange(eventKey){
        this.setState({key: eventKey});
        var kind = this.props.content.types[this.props.realtyKind[eventKey]][this.props.language];
        actions.selectRealtyType(this.props.type, kind, this.props.content[eventKey], this.props.language);
    },
    componentWillMount(){
        var kind;

        this.setState({key: this.props.default});
        kind = this.props.content.types[this.props.realtyKind[this.props.default]][this.props.language];

        actions.selectRealtyType(this.props.type, kind, this.props.content[this.props.default], this.props.language);


    },

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
