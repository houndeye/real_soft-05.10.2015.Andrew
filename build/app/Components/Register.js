define(["exports","module","react","reflux","react_bootstrap","../Actions/Register","../Stores/Register"],function(e,t,s,a,r,o,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var u=l(s),c=l(a),i=l(r),d=l(o),f=l(n),m={},p=i["default"].Button,g=i["default"].Input;t.exports=u["default"].createClass({displayName:"Register",mixins:[c["default"].connect(f["default"])],userInput:function(e){this.setState({username:e.target.value})},passwordInput:function(e){this.setState({password:e.target.value})},confirmPasswordInput:function(e){this.setState({confirmPassword:e.target.value}),e.target.value==this.state.password&&this.setState({register:!0})},onClick:function(){this.state.register&&(console.log(this.state),d["default"].register(this.state.username,this.state.password))},render:function(){return u["default"].createElement("form",{style:m},u["default"].createElement("div",{className:"form-group"},u["default"].createElement(g,{type:"text",className:"form-control",ref:"username",placeholder:"Username",onChange:this.userInput})),u["default"].createElement("div",{className:"form-group"},u["default"].createElement("input",{type:"password",name:"password",className:"form-control",ref:"password",placeholder:"Password",onChange:this.passwordInput})),u["default"].createElement("div",{classNmae:"form-group"},u["default"].createElement("input",{type:"password",name:"confirm-password",className:"form-control",ref:"confirmPassword",placeholder:"Confirm Password",onChange:this.confirmPasswordInput})),u["default"].createElement("div",{className:"form-group"},u["default"].createElement("div",{className:"row"},u["default"].createElement("div",{className:"col-sm-6 col-sm-offset-3"},u["default"].createElement(p,{className:"form-control btn btn-register",onClick:this.onClick},"Register Now")))))}})});