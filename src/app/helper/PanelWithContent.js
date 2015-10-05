import React from 'react';
import RB from 'react_bootstrap';

var Panel = RB.Panel;
var Well = RB.Well;
var Button = RB.Button;


export default React.createClass({
    getDefaultProps(){
        return {
            "bsStyle": "info",
            "bsSize": "small"
        }
    },
    render: function () {


        return (

            <div >
                <Panel style={this.props.Style.bg} bsStyle={this.props.bsStyle} bsSize={this.props.bsSize}
                       onClick={this.props.onClick}>
                    <PanelContent data={this.props.data}/>
                </Panel>
                <Well>{this.props.txt}</Well>
            </div>
        )
    }

});


var PanelContent = React.createClass({

    render(){
        var style = {marginLeft: "-1px"};

        return (<div  >
            <h6 className="col-sm-2" style={style}>{this.props.data.rooms }</h6>
            <h6 className="col-sm-2">{this.props.data.price}</h6>
            <h6 className="col-sm-4">{this.props.data.region}</h6>
            <h6 className="col-sm-4">{this.props.data.street}</h6>
        </div >
        )
    }

});

