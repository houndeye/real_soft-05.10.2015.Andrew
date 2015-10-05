import React from 'react';
import Reflux from 'reflux';


import actions from '../../Actions/Rent/RentSearchMenu';
import dbRealtyActions from '../../Actions/dbRealtyActions';
import dataHandler from '../../Actions/Rent/DataHandler';
import dbClientActions from '../../Actions/dbClientActions';
import clientHandler from '../../Actions/Rent/ClientHandler';

import SearchMenu from '../rent/SearchMenu'
import MainContent from '../rent/MainContent'


import NavMenu from '../../helper/NavMenu';

export default React.createClass({
    //mixins: [Reflux.connect(store)],
    //getDefaultProps(){
    //
    //    return {
    //        default: "home"
    //    }
    //},
    getInitialState(){
        return (        {
            eventKey: 'home'
        }        )
    },
    onSelect(eventKey)
    {
        this.setState({eventKey: eventKey});
        actions.changeSearchMenu(eventKey, this.props.content, this.props.language);
    },
    componentDidMount()
    {
        dbRealtyActions.getStartSliderOptions();
        actions.changeSearchMenu(this.state.eventKey, this.props.content, this.props.language);
        dbClientActions.findAllActiveClients(clientHandler.setClients);
        dbRealtyActions.findAllActiveRealty(dataHandler.setRealty);
        dbRealtyActions.getAllImages();
    },
    render() {
        console.log(this.props, this.state);
        return (<main>
                <NavMenu classes="col-sm-2" onSelect={this.onSelect} activeKey={this.state.eventKey}
                         data={this.props.content.menu.types} languagePar={this.props.language}/>
                <SearchMenu />
                <MainContent labels={this.props.content.mainSection[this.state.eventKey]}/>
            </main>

        )
    }
})
;
