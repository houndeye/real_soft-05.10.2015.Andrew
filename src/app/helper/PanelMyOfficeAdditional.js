import React from 'react';
import RB from 'react_bootstrap';

var Panel = RB.Panel;
var Label = RB.Label;
var Button = RB.Button;
var Glyphicon = RB.Glyphicon;
var ButtonGroup = RB.ButtonGroup;

export default React.createClass({
    getDefaultProps(){
        return {
            "bsStyle": "info",
            "bsSize": "small",
            "visibility": false
        }
    },
    render: function () {
        var Panels = this.props.realty.length > 1 ? this.props.realty.map(function (prop, i) {
            return (
                <Panel key={i} style={this.props.Style.bg}
                       bsStyle={this.props.bsStyle}
                       bsSize={this.props.bsSize}
                       eventKey={i+1}>
                    <PanelContent data={prop} dataObj={this.props.data[i]} labels={this.props.labels}
                                  click={this.props.click}/>

                </Panel>)
        }.bind(this)) : (<Panel key={1} style={this.props.Style.bg}
                                bsStyle={this.props.bsStyle}
                                bsSize={this.props.bsSize}
                                eventKey={1}>
            <PanelContent data={this.props.realty[0]} dataObj={this.props.data[0]}
                          labels={this.props.labels}
                          click={this.props.click}/>

        </Panel>);

        return (

            <div className="hideOverflow" style={this.props.visibility ?{visibility:"hidden"}:{visibility:"visible"}}>
                {Panels}
            </div>
        )
    }

});


var PanelContent = React.createClass({
    onClick1(){
        this.props.click[0](this.props.dataObj);
    },
    onClick2(){
        this.props.click[1](this.props.dataObj);
    },
    onClick3(){
        this.props.click[2](this.props.dataObj);
    },
    render(){
        var style = {marginLeft: "-2px"};
        return (<div >
            <h5 className="col-sm-2" style={{padding:0}}>
                <ButtonGroup  >
                    <Button bsSize="xsmall" onClick={this.onClick3}>
                        {this.props.obj ? React.createElement(this.props.obj) : (
                            <Glyphicon glyph='arrow-left'/>)}</Button>
                    <Button bsSize="xsmall" onClick={this.onClick1}>
                        {this.props.obj ? React.createElement(this.props.obj) : (
                            <Glyphicon glyph='search'/>)}</Button>
                    <Button bsSize="xsmall" onClick={this.onClick2}>
                        {this.props.obj ? React.createElement(this.props.obj) : (
                            <Glyphicon glyph='trash'/>)}</Button>

                </ButtonGroup>
            </h5>
            <h5 className="col-sm-2" style={style}>{this.props.data[this.props.labels[0][0]] }</h5>
            <h5 className="col-sm-2">{this.props.data[this.props.labels[1][0]]} </h5>
            <h5 className="col-sm-3"> {this.props.data[this.props.labels[2][0]]}</h5>
            <h5 className="col-sm-3">{this.props.data[this.props.labels[3][0]]} </h5>

            </div>
        )
    }

});

