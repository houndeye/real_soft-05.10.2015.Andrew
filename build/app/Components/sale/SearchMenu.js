define(["exports","module","react","react_bootstrap"],function(e,t,a,l){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=r(a),s=r(l),d=s["default"].Panel,o=s["default"].PanelGroup,u=(s["default"].ListGroup,s["default"].ListGroupItem,s["default"].Button),i=s["default"].ButtonGroup,c=(s["default"].ButtonToolbar,s["default"].DropdownButton,s["default"].MenuItem,s["default"].Navbar,s["default"].NavItem,s["default"].Nav,s["default"].Grid,s["default"].Row,s["default"].Col,s["default"].Label),f={width:"100%"},m=["add","edit","delete"],p=n["default"].createClass({displayName:"HiddenPanel",render:function(){return n["default"].createElement(u,{bsStyle:this.props.btn.bsStyle,bsSize:"xsmall"}," ",this.props.btn.name)}}),h=n["default"].createClass({displayName:"PanelHeader",render:function(){return n["default"].createElement("div",null,n["default"].createElement("h5",{className:"col-sm-4"},this.props.data.rooms+"  ",n["default"].createElement(c,{bsStyle:"primary",bsSize:"xsmall"},this.props.data.price)),n["default"].createElement("h5",{className:"col-sm-4"}," ",this.props.data.region),n["default"].createElement("h5",{className:"col-sm-4"},this.props.data.street," "))}}),b=n["default"].createClass({displayName:"MyPanel",getDefaultProps:function(){return{data:[{rooms:"4",price:"23333323324345",region:"Frankivskiy",street:"Doroshenka"},{rooms:"3",price:"2333334354345",region:"Frankivskiy",street:"Doroshenka"},{rooms:"1",price:"233333345433545",region:"Frankivskiy",street:"Doroshenka"}]}},render:function(){var e=this.props.data.map(function(e,t){return n["default"].createElement(d,{header:n["default"].createElement("label",{style:f},n["default"].createElement(h,{data:e})," "),bsStyle:"info",eventKey:t+1},n["default"].createElement(i,{className:" pull-right"},this.props.hiddenPanel.map(function(e){return n["default"].createElement(p,{btn:e})}.bind(this))))}.bind(this));return n["default"].createElement(o,{accordion:!0,onSelect:this.props.onSelect},e)}});t.exports=n["default"].createClass({displayName:"SearchMenu",getInitialState:function(){return{activeKey:0}},getDefaultProps:function(){return{btn:[{name:"add",bsStyle:"success"},{name:"edit",bsStyle:"primary"},{name:"delete",bsStyle:"danger"}],data:m}},onSelect:function(e){this.setState({activeKey:e})},render:function(){return n["default"].createElement("nav",{className:"hideOverflow col-sm-4"},n["default"].createElement(b,{hiddenPanel:this.props.btn,onSelect:this.onSelect}))}})});