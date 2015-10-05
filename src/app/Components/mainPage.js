import React from 'react';
import Reflux from 'reflux';
//import { Router, Route, Link } from 'react-router';
//import { history } from 'react-router/lib/BrowserHistory';

import SitePage from '../Components/page'
import store from '../Stores/Index';


let Body = React.createClass({

    render(){
        return (
            React.createElement(SitePage, "", this.props)
        )

    }
});

export function render(content) {

    var content = JSON.parse(content);
    try {
        React.render(<Body content={content}/>, document.getElementsByTagName('body')[0]);
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}