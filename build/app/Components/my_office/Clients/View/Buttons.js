define(["exports","module","react","reflux","react_bootstrap","../../../../Actions/MyOffice/Client/View/ClientView","../../../../Stores/MyOffice/Client/View/ClientView","../../../../Stores/MyOffice/Client/View/Inputs"],function(t,e,i,n,s,a,o,l){"use strict";function u(t){return t&&t.__esModule?t:{"default":t}}var r=u(i),c=u(n),f=u(s),p=u(a),d=u(o),h=u(l),C=f["default"].Button;e.exports=r["default"].createClass({displayName:"Buttons",mixins:[c["default"].connect(d["default"]),c["default"].connect(h["default"])],onClick:function(){this.state.inputData?this.state.viewProps.action(this.state.inputData):this.state.viewProps.action()},onClickExit:function(){p["default"].exit()},render:function(){var t=this.props.language,e=this.state.viewProps.buttonName;return r["default"].createElement("div",null,this.state.viewProps?r["default"].createElement(C,{onClick:this.onClick},this.props.buttons[e][t]):"",this.state.viewProps?r["default"].createElement(C,{onClick:this.onClickExit}," ",this.props.buttons.exit[t]):"")}})});