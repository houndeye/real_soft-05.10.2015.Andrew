define(["exports","module","reflux","../helper/ajax","../Actions/Index","../Actions/Login","../Components/login","../Components/Register"],function(e,n,o,t,i,l,r,s){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var a=u(o),f=u(i),c=u(l),g=u(r),d=u(s),m={login:g["default"],register:d["default"]};n.exports=a["default"].createStore({listenables:[c["default"]],getInitialState:function(){return{formBody:m.login,active:"login"}},onChange:function(e){e&&this.trigger({formBody:m[e],active:e})},onLogin:function(e,n){var o={username:e,password:n};console.log(o),t.sendJson("login",o,function(e,n){e?console.log(e):console.log(n)}).done(function(e){f["default"].enter(e)})}})});