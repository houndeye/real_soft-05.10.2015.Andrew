define(["exports","module","reflux","../../../Actions/MyOffice/Realty/RealtyParams","../../../Components/my_office/Realty/View/Inputs"],function(t,e,n,o,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var l=i(n),r=i(o),u=i(a),f={content:void 0,props:void 0};e.exports=l["default"].createStore({listenables:[r["default"]],getInitialState:function(){return{optionRealtyContent:f}},onSelectRealtyType:function(t,e,n,o){f.content=u["default"],f.props={content:n,language:o,realtyType:e,type:t},this.trigger({optionRealtyContent:f})}})});