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

var Style = {width: '100%'};

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

        return (<div  >

            < h5 className="col-sm-4">{this.props.data.rooms + "  "}
                <Label bsStyle="primary" bsSize="xsmall">{this.props.data.price}</Label>
            </h5>
            < h5 className="col-sm-4"> {this.props.data.region}</h5>
            < h5 className="col-sm-4">{this.props.data.street} </h5>
        </div>
        )
    }

});
var MyPanel = React.createClass({
    getDefaultProps(){
        return {
            "data": [
                {
                    "rooms": "4",
                    "price": "23333323324345",
                    "region": "Frankivskiy",
                    "street": "Doroshenka"
                }, {
                    "rooms": "3",
                    "price": "2333334354345",
                    "region": "Frankivskiy",
                    "street": "Doroshenka"
                }, {
                    "rooms": "1",
                    "price": "233333345433545",
                    "region": "Frankivskiy",
                    "street": "Doroshenka"
                }]
        };
    },
    render(){
        var Panels = this.props.data.map(function (prop, i) {
            return (<Panel header={(<label style={Style}><PanelHeader data={prop} /> </label>)}
                           bsStyle='info'
                           eventKey={i+1}>
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

            <nav className="hideOverflow col-sm-4">
                <MyPanel hiddenPanel={this.props.btn} onSelect={this.onSelect}/>

            </nav>
        )

    }

});
