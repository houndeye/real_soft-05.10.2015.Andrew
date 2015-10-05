import React from 'react';
import Reflux from 'reflux';
import RB from 'react_bootstrap';


import store from '../../../Stores/MyOffice/GetAllUserClients'

import actions  from '../../../Actions/MyOffice/Client/ClientAdditional';
import actions2 from '../../../Actions/MyOffice/Client/View/ClientView';

import * as separator from '../../../helper/SeparateData'

import MainSection from '../Clients/ClientsMainSection'
import NavMenu from '../../../helper/NavMenu';
var Button = RB.Button;

export default React.createClass({
    mixins: [Reflux.connect(store)],
    getInitialState(){
        return (
        {type: this.props.default}
        )
    },
    getDefaultProps(){
        return ({default: "commercial"})

    },

    onClick(){
        actions.closeView();
        actions2.add();
        actions.changeReadableWritableView(false);
        actions.view();
    },
    onSelect(eventKey){
        this.setState({type: eventKey})
    },
    render () {
        var data = separator.separateRealtyByType(this.state.userClients);

        return (<main>
            <NavMenu classes="col-sm-2" onSelect={this.onSelect} activeKey={this.props.default}
                     data={this.props.content.types} languagePar={this.props.language}/>
            <Button onClick={this.onClick} className='pull-right'>Add</Button>
            <MainSection data={data} type={this.state.type} content={this.props.content}
                         language={this.props.language}/>
        </main>
        )
    }
});


//<MainSection data={data} type={this.state.type} content={this.props.content}
//             language={this.props.language}/>