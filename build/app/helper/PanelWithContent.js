define(["exports","module","react","react_bootstrap"],function(e,t,a,l){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=s(a),n=s(l),o=n["default"].Panel,u=n["default"].Well;n["default"].Button;t.exports=r["default"].createClass({displayName:"PanelWithContent",getDefaultProps:function(){return{bsStyle:"info",bsSize:"small"}},render:function(){return r["default"].createElement("div",null,r["default"].createElement(o,{style:this.props.Style.bg,bsStyle:this.props.bsStyle,bsSize:this.props.bsSize,onClick:this.props.onClick},r["default"].createElement(i,{data:this.props.data})),r["default"].createElement(u,null,this.props.txt))}});var i=r["default"].createClass({displayName:"PanelContent",render:function(){var e={marginLeft:"-1px"};return r["default"].createElement("div",null,r["default"].createElement("h6",{className:"col-sm-2",style:e},this.props.data.rooms),r["default"].createElement("h6",{className:"col-sm-2"},this.props.data.price),r["default"].createElement("h6",{className:"col-sm-4"},this.props.data.region),r["default"].createElement("h6",{className:"col-sm-4"},this.props.data.street))}})});