define(["exports","module","react","reflux","react_bootstrap","../../../Stores/MyOffice/GetAllUserRealty","../../../Actions/MyOffice/Realty/RealtyAdditional","../../../Actions/MyOffice/Realty/View/RealtyView","../../../helper/SeparateData","../Realty/RealtyMainSection","../../../helper/NavMenu"],function(e,t,a,l,n,i,s,u,r,c,o){"use strict";function f(e){return e&&e.__esModule?e:{"default":e}}var d=f(a),p=f(l),y=f(n),h=f(i),g=f(s),m=f(u),R=f(c),S=f(o),v=y["default"].Button;t.exports=d["default"].createClass({displayName:"Index",mixins:[p["default"].connect(h["default"])],getInitialState:function(){return{type:this.props["default"]}},getDefaultProps:function(){return{"default":"commercial"}},onClick:function(){g["default"].closeViewRealty(),m["default"].add(),g["default"].changeReadableWritableView(!1),g["default"].viewRealty()},onSelect:function(e){this.setState({type:e})},render:function(){var e=r.separateRealtyByType(this.state.userRealty);return d["default"].createElement("main",null,d["default"].createElement(S["default"],{classes:"col-sm-2",onSelect:this.onSelect,activeKey:this.props["default"],data:this.props.content.view.types,languagePar:this.props.language}),d["default"].createElement(v,{onClick:this.onClick,className:"pull-right"},"Add"),d["default"].createElement(R["default"],{data:e,type:this.state.type,content:this.props.content,language:this.props.language}))}})});