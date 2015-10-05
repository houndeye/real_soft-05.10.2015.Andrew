import React from 'react';
import RB from 'react_bootstrap';

var Panel = RB.Panel;
var PanelGroup = RB.PanelGroup;
var ListGroup = RB.ListGroup;
var ListGroupItem = RB.ListGroupItem;
var Button = RB.Button;
var ButtonGroup = RB.ButtonGroup;
var ButtonToolbar = RB.ButtonToolbar;
var DropdownButton = RB.DropdownButton;
var MenuItem = RB.MenuItem;
var Navbar = RB.Navbar;
var NavItem = RB.NavItem;
var Nav = RB.Nav;
var Grid = RB.Grid;
var Row = RB.Row;
var Col = RB.Col;
var Label = RB.Label;

var Style = {
    "width": {
        width: '100%'
    },
    "text": {
        color: "black"
    },
    "whiteSpace": {
        whiteSpace: "normal"
    },
    "margin": {
        margin: 0,
        whiteSpace: "normal"
    }

};

var brand = 'Показувати';
var data = ["add", "edit", "delete"];

var HiddenPanel = React.createClass({
    render(){
        //  console.log(this.props);
        return (<Button bsStyle={this.props.btn.bsStyle} bsSize="xsmall"> {this.props.btn.name}</Button>)
    }
});
var PanelHeader = React.createClass({

        render(){
            var head = (<label style={Style.text}>
                <h6 className="col-sm-1" style={Style.margin}>{this.props.data.people }</h6>
                <h6 className="col-sm-2" style={Style.margin}>  {this.props.data.price}</h6>
                <h6 className="col-sm-4" style={Style.margin}> {this.props.data.region}</h6>
                <h6 className="col-sm-4" style={Style.margin}>{this.props.data.street} </h6>
            </label>
            );

            return (
                <Panel header={head} bsStyle='primary'>
                    <label style={Style.whiteSpace}>content 1 dfd dfdf sdfsd sdfsdf sdff sdffsdf dsfsdf</label>
                </Panel>
            )
        }

    })
    ;
var MyPanel = React.createClass({
    getDefaultProps(){
        return {
            "data": [
                {
                    "people": "4",
                    "price": "23333",
                    "region": "Frankivskiy",
                    "street": "Doroshenka"
                }, {
                    "people": "3",
                    "price": "2333",
                    "region": "Frankivskiy",
                    "street": "Doroshenka"
                }, {
                    "people": "1",
                    "price": "23333",
                    "region": "Frankivskiy",
                    "street": "Doroshenka"
                }]
        };
    },
    render(){
        var Panels = this.props.data.map(function (prop, i) {
            return (<Panel header={(<label style={Style.width}><PanelHeader data={prop}/> </label>)}
                           bsStyle='info'
                           eventKey={i + 1}>
                <ButtonGroup className=" pull-right">
                    {this.props.hiddenPanel.map(function (pr) {
                            return (  <HiddenPanel btn={pr}/>)
                        }.bind(this)
                    ) }
                </ButtonGroup>
            </Panel>)
        }.bind(this));

        return (  <PanelGroup accordion onSelect={this.props.onSelect}>
            {Panels}
        </PanelGroup>)

    }
});
export default React.createClass({
    getInitialState(){
        return {activeKey: 0};
    },
    getDefaultProps(){
        return {
            "btn": [
                {
                    "name": "add",
                    "bsStyle": "success"
                }, {
                    "name": "edit",
                    "bsStyle": "primary"
                }, {
                    "name": "delete",
                    "bsStyle": "danger"
                }

            ],
            "data": data
        };
    },
    onSelect(eventKey){
        this.setState({"activeKey": eventKey})
    },
    render: function () {


        return (

            <nav className="hideOverflow col-sm-3">
                <MyPanel hiddenPanel={this.props.btn} onSelect={this.onSelect}/>

            </nav>
        )

    }

});
