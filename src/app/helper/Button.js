import React from 'react';
import RB from 'react_bootstrap';

var Panel = RB.Panel;
var Label = RB.Label;
var Button = RB.Button;


export default React.createClass({

    render(){

        return (<Button className={this.props.classes} style={this.porps.style} bsSize={this.props.bsSize}
                        onClick={this.props.click}>{this.props.obj}</Button>
        )
    }

});

