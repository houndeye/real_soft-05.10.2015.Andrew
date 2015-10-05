import React from 'react'
import Reflux from'reflux'

import InputTemplate from '../../../helper/InputTemplate'


import store from '../../../Stores/MyOffice/Client/ClientAdditional'
import inputStore from '../../../Stores/MyOffice/Client/View/Inputs'


import userDb from '../../../Actions/MyOffice/Client/clientDb'


var params = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
};


export default React.createClass({
    mixins: [Reflux.connect(inputStore), Reflux.connect(store)],
    componentWillMount(){

    },
    render(){
        return (<div>
            {(<InputTemplate
                data={this.state.inputData||params}
                readable={this.state.readable}
                classProp={["col-sm-6"]}
                labels={this.props.content.content}
                language={this.props.content.language}
                dbActions={clientDb.getRealtyParams}
                type={this.props.content.type}
                realtyType={this.props.content.realtyType}
                region={this.props.region}
                params={params}
                />)}

        </div>)
    }
})
