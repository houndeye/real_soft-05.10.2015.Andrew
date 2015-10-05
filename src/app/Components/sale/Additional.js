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
    "width": {width: '100%', display: 'inline-block', cursor: "default"},
    "displayInline": {display: 'inline-block'}
};

var brand = 'Показувати';
var HiddenPanel = React.createClass({

    render(){
        //  console.log(this.props);
        return (
            <ButtonGroup className=" pull-right">
                <Button bsSize="xsmall"> {this.props.data.date}</Button>
                <Button bsSize="xsmall"> {this.props.data.name}</Button>
                <Button bsSize="xsmall"> {this.props.data.mail}</Button>
            </ButtonGroup>)
    }
});
var PanelHeader = React.createClass({
    onClick(e){

    },
    render(){

        return (<div  >

            < h5 className="col-sm-4">{this.props.data.rooms + "  "}
                <Label bsStyle="primary" bsSize="xsmall">{this.props.data.price}</Label>
            </h5>
            < h5 className="col-sm-3"> {this.props.data.region}</h5>
            < h5 className="col-sm-3">{this.props.data.street} </h5>
            < h5 className="col-sm-2">
                <Button className=" pull-right" bsSize="xsmall" onClick={this.onClick}> Close</Button>
            </h5>
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
    onSelect(e){
        e.stopPropagation();
    },
    render(){
        var Panels = this.props.data.map(function (prop, i) {
            return (<Panel header={(<div style={Style.width}><PanelHeader data={prop} /> </div>)}
                           bsStyle='info' eventKey={i+1}>
                <HiddenPanel data={this.props.hiddenPanel[i]}/>

            </Panel>)
        }.bind(this));

        return (  <PanelGroup onSelect={this.props.onSelect}>
            {Panels}
        </PanelGroup>)

    }
});
export default React.createClass({

    getDefaultProps(){
        return {
            "data": [
                {
                    "date": "111/22/444",
                    "name": "Ivan Ivanov",
                    "mail": "hh@h.rr"
                }, {
                    "date": "111/22/4",
                    "name": "Ivan Ivanvych",
                    "mail": "h@hh.rr"
                }, {
                    "date": "111/22/44",
                    "name": "Ivan Ivaovych",
                    "mail": "hh@hh.r"

                }

            ]
        };
    },

    render: function () {


        return (

            <nav className="hideOverflow col-sm-5">
                <MyPanel hiddenPanel={this.props.data} onSelect={this.onSelect}/>

            </nav>
        )

    }

});
