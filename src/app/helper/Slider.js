import RS from 'react_slider';
import React from 'react';

var ReactSlider = React.createFactory(RS);
var Slider = React.createFactory(React.createClass({

    getInitialState(){
        return {value: this.props.defaultValue}
    },
    render: function () {
        return ReactSlider(
            React.__spread({
                className: this.props.orientation + '-slider',
                pearling: true,
                value: this.state.value,
                onChange: this.props.onChange,
                disabledMouseDown: true
            }, this.props)
        );
    }
}));

export default React.createClass({
    propTypes: {
        first_value: React.PropTypes.number,
        second_value: React.PropTypes.number,
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        step: React.PropTypes.number,
        onChange: React.PropTypes.func.isRequired,
        orientation: React.PropTypes.oneOf(['horizontal', 'vertical'])
    },
    getInitialState(){
        return {
            "value1": this.props.first_value || this.props.min, "value2": this.props.second_value || this.props.max
        }
    },
    getDefaultProps(){
        return {
            "first_value": null,
            "second_value": null,
            "min": 0,
            "max": 10,
            "step": 1,
            "onChange": 0,
            "orientation": "horizontal"
        }
    }, onSliderChange(value){
        this.setState({"value1": value[0], "value2": value[1]});
        this.props.onSChange(this.props.sliderKey, value);
    },
    componentDidMount(){
        var value = [this.props.min, this.props.max];
        this.props.onSChange(this.props.sliderKey, value);
    },
    //componentWillReceiveProps(){
    //    var value = [this.props.min, this.props.max];
    //    this.props.onSChange(this.props.sliderKey, value);
    //},
    componentDidUpdate(){

    },
    render(){

        return (<div> {Slider({
            defaultValue: [this.props.first_value || this.props.min, this.props.second_value || this.props.max],
            min: this.props.min || 0,
            max: this.props.max || 10,
            orientation: this.props.orientation,
            withBars: true,
            minDistance: this.props.step,
            onChange: this.props.onChange || this.onSliderChange

        })}
            <label className="pull-left">{this.state.value1}</label>
            <label className="pull-right">{this.state.value2}</label>

        </div>)
    }
})