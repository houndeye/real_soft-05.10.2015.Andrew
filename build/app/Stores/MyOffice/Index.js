define(["exports","module","reflux","../../Actions/MyOffice/Index","../../Components/my_office/Realty/Index","../../Components/my_office/Clients/Index","../../Components/my_office/PersonalData/Index"],function(e,t,n,o,a,i,f){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var r=l(n),s=l(o),u=l(a),c=l(i),d=l(f),p={realty:u["default"],clientList:c["default"],personalData:d["default"]},g={content:void 0,props:void 0};t.exports=r["default"].createStore({listenables:[s["default"]],getInitialState:function(){return{pageContent:g}},onChangePageContent:function(e,t,n){g.content=p[e],g.props={content:t,language:n},this.trigger({pageContent:g})}})});