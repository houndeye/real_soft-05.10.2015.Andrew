define(["exports","module","react","react_bootstrap"],function(e,t,s,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var l=r(s),o=r(a),u=(o["default"].Panel,o["default"].Label,o["default"].Button);t.exports=l["default"].createClass({displayName:"Button",render:function(){return l["default"].createElement(u,{className:this.props.classes,style:this.porps.style,bsSize:this.props.bsSize,onClick:this.props.click},this.props.obj)}})});