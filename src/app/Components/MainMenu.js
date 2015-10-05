import React from 'react';
import Reflux from 'reflux';


import NavMenu from '../helper/NavMenu';
import realtyStore from '../Stores/dbRealtyActions'
import clientStore from '../Stores/dbClientActions'

import actions from '../Actions/MainMenu';


export default React.createClass({
    getDefaultProps(){
        return {"language": 1}
    },
    handleSelect: function (selectedKey) {
        actions.select(selectedKey, this.props.content[selectedKey], this.props.language);
    },
    componentDidMount(){

    },
    render: function () {
        //console.log(this.state);
        //console.log(this.props);
        return (
            <header >

                <NavMenu bsStyle="pills" activeKey={"sale"} classes="col-sm-2"
                         onSelect={this.handleSelect} data={this.props.content.mainMenu.pages}
                         languagePar={this.props.language}/>
            </header>
        )
    }

});

