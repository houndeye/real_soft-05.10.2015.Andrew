import React from 'react';
import Reflux from 'reflux';

import actions from '../../Actions/MyOffice/Index';

import dbRealtyActions from '../../Actions/dbRealtyActions'
import dbClientActions from '../../Actions/dbClientActions'
import realtyDb from '../../Stores/MyOffice/Realty/realtyDb'
import clientDd from '../../Stores/MyOffice/Client/clientDb'
import MainContent from '../my_office/MainContent';


import NavMenu from '../../helper/NavMenu';

export default React.createClass({

    getDefaultProps(){

        return {
            default: "realty"
        }
    },
    onSelect(eventKey)    {
        actions.changePageContent(eventKey, this.props.content.pageContent[eventKey], this.props.language);
    },
    componentWillMount(){
        dbRealtyActions.findAllUserRealty();
        dbClientActions.findAllUserClients();
        actions.changePageContent(this.props.default, this.props.content.pageContent[this.props.default], this.props.language);
    },
    render: function () {
        return (<main>
            <NavMenu classes="col-sm-4" onSelect={this.onSelect} activeKey={this.props.default}
                     data={this.props.content.pageContent.types} languagePar={this.props.language}/>
            <MainContent/>

        </main>        )
    }
});
