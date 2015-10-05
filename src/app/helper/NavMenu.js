import React from 'react';
import RB    from 'react_bootstrap';


var Nav = RB.Nav;
var NavItem = RB.NavItem;


export default React.createClass({
    getInitialState(){
        return {"activeKey": this.props.activeKey}
    },
    handleSelect: function (selectedKey) {
        this.props.onSelect(selectedKey);
        this.setState({"activeKey": selectedKey})
    },
    render: function () {
        var Element = this.props.data.map(function (value) {

            return (
                <NavItem className={this.props.classes} key={value[0]} eventKey={value[0]}>
                    {value[this.props.languagePar]}
                </NavItem>
            );
        }.bind(this));

        return (
            <Nav bsStyle={this.props.bsStyle} activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                {Element}
            </Nav>
        )
    }

});