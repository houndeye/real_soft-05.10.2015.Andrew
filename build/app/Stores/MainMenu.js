define(["exports","module","reflux","../Actions/MainMenu","../helper/storeHelper","../Components/rent/Index","../Components/sale/index","../Components/daily_rent/Index","../Components/more_service/Index","../Components/forum/Index","../Components/my_office/Index"],function(e,t,n,o,r,a,i,l,s,u,f){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}var p=d(n),c=d(o),g=d(a),m=d(i),x=d(l),v=d(s),C=d(u),I=d(f),_=new Map([["rent",g["default"]],["sale",m["default"]],["daily rent",x["default"]],["more service",v["default"]],["forum",C["default"]],["my office",I["default"]]]),h="sale",w={view:"sale",props:void 0};t.exports=p["default"].createStore({listenables:[c["default"]],getPage:function(e){return _.get(e)},onSelect:function(e,t,n){console.log(e,t,n),w.view=this.getPage(e),w.props={content:t,language:n},this.trigger({page:w})},getInitialState:function(){return w.view=this.getPage(h),{page:w}}})});