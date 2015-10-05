import React from 'react';
import Reflux from 'reflux';
import RB from 'react_bootstrap';


import store from '../../../Stores/MyOffice/GetAllUserRealty'

import actions  from '../../../Actions/MyOffice/Realty/RealtyAdditional';
import actions2 from '../../../Actions/MyOffice/Realty/View/RealtyView';

import * as separator from '../../../helper/SeparateData'

import MainSection from '../Realty/RealtyMainSection'
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
        actions.closeViewRealty();
        actions2.add();
        actions.changeReadableWritableView(false);
        actions.viewRealty();

    },
    onSelect(eventKey){
        this.setState({type: eventKey})
    },

    render () {
        var data = separator.separateRealtyByType(this.state.userRealty);
        return (<main>
            <NavMenu classes="col-sm-2" onSelect={this.onSelect} activeKey={this.props.default}
                     data={this.props.content.view.types} languagePar={this.props.language}/>
            <Button onClick={this.onClick} className='pull-right'>Add</Button>
            <MainSection data={data} type={this.state.type} content={this.props.content}
                         language={this.props.language}/>

        </main>
        )
    }
});


