define(["exports","module","reflux","../../../Actions/MyOffice/Client/RealtyParams","../../../Components/my_office/Clients/View/Inputs"],function(t,e,n,o,i){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}var a=l(n),r=l(o),u=l(i),s={content:void 0,props:void 0};e.exports=a["default"].createStore({listenables:[r["default"]],getInitialState:function(){return{optionRealtyContent:s}},onSelectRealtyType:function(t,e,n,o){s.content=u["default"],s.props={content:n,language:o,realtyType:e,type:t},this.trigger({optionRealtyContent:s})}})});