import React from 'react';
import RB from 'react_bootstrap';

import Header from '../Components/MainMenu';
import Content from '../Components/MainContent'
import Footer from '../Components/Footer';

var Grid = RB.Grid;


export default React.createClass({

    render(){

        return (<Grid><Header content={this.props.children.content}/>
            <Content />

        </Grid>)


    }

});