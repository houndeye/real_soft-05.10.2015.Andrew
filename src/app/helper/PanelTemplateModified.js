import React from 'react';
import RB from 'react_bootstrap';

var Panel = RB.Panel;
var Label = RB.Label;
var Button = RB.Button;


export default React.createClass({
    getDefaultProps(){
        return {
            "bsStyle": "info",
            "bsSize": "small"
        }
    },
    render: function () {
        var Panels = this.props.data.map(function (prop, i) {
            return (<Panel key={i} style={this.props.Style.bg} bsStyle={this.props.bsStyle} bsSize={this.props.bsSize}
                           eventKey={i+1}>
                <PanelContent data={prop} click={this.props.click}/>

            </Panel>)
        }.bind(this));

        return (

            <div className="hideOverflow ">
                {Panels}
            </div>
        )
    }

});


var PanelContent = React.createClass({
//onClick(){
// console.log(this.props,1)
//    console.log(this.props.click,2)
//},
    render(){
        var style = {marginLeft: "-2px"};
        return (<div  >
            {this.props.position == 'left' ? (<ModifiedString classes={this.props.obj.classes}
                                                              obj={this.props.obj.self}
                                                              click={this.props.click}/>) : " "}
            <h5 className="col-sm-1" style={style}>{this.props.data.rooms }</h5>
            <h5 className="col-sm-3">                {this.props.data.price}            </h5>
            <h5 className="col-sm-3"> {this.props.data.region}</h5>
            <h5 className="col-sm-3">{this.props.data.street} </h5>
            {this.props.position == 'right' ? (<ModifiedString classes={this.props.obj.classes}
                                                               obj={this.props.obj.self}
                                                               click={this.props.click}/>) : " "}
        </div>
        )
    }

});

var ModifiedString = React.createClass({


    render(){
        var classes = "col-sm-2" + this.props.classes;

        return (
            <h5 className={classes} bsSize="xsmall" onClick={this.props.click}> {this.props.obj} </h5>
        )
    }
});
