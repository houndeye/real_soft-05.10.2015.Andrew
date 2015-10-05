define(["exports","module","react_slider","react"],function(e,t,a,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=n(a),i=n(s),o=i["default"].createFactory(r["default"]),l=i["default"].createFactory(i["default"].createClass({getInitialState:function(){return{value:this.props.defaultValue}},render:function(){return o(i["default"].__spread({className:this.props.orientation+"-slider",pearling:!0,value:this.state.value,onChange:this.props.onChange,disabledMouseDown:!0},this.props))}}));t.exports=i["default"].createClass({displayName:"Slider",propTypes:{first_value:i["default"].PropTypes.number,second_value:i["default"].PropTypes.number,min:i["default"].PropTypes.number,max:i["default"].PropTypes.number,step:i["default"].PropTypes.number,onChange:i["default"].PropTypes.func.isRequired,orientation:i["default"].PropTypes.oneOf(["horizontal","vertical"])},getInitialState:function(){return{value1:this.props.first_value||this.props.min,value2:this.props.second_value||this.props.max}},getDefaultProps:function(){return{first_value:null,second_value:null,min:0,max:10,step:1,onChange:0,orientation:"horizontal"}},onSliderChange:function(e){this.setState({value1:e[0],value2:e[1]}),this.props.onSChange(this.props.sliderKey,e)},componentDidMount:function(){var e=[this.props.min,this.props.max];this.props.onSChange(this.props.sliderKey,e)},componentDidUpdate:function(){},render:function(){return i["default"].createElement("div",null," ",l({defaultValue:[this.props.first_value||this.props.min,this.props.second_value||this.props.max],min:this.props.min||0,max:this.props.max||10,orientation:this.props.orientation,withBars:!0,minDistance:this.props.step,onChange:this.props.onChange||this.onSliderChange}),i["default"].createElement("label",{className:"pull-left"},this.state.value1),i["default"].createElement("label",{className:"pull-right"},this.state.value2))}})});