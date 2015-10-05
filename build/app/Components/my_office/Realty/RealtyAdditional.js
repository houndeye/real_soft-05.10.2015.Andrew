define(["exports","module","react","reflux","../../../helper/PanelMyOfficeAdditional","../Realty/View","../../../Stores/MyOffice/Realty/RealtyAdditional","../../../Actions/MyOffice/Realty/RealtyMainInfo","../../../Actions/Map","../../../Actions/MyOffice/Realty/realtyDb","../../../Actions/dbRealtyActions","../../../Actions/MyOffice/Realty/View/Inputs","../../../Actions/MyOffice/Realty/View/RealtyView"],function(e,t,a,l,i,n,s,o,d,r,c,f,u){"use strict";function y(e){return e&&e.__esModule?e:{"default":e}}var p=y(a),h=y(l),g=y(i),R=y(n),m=y(s),A=y(o),w=y(d),v=y(r),b=y(c),M=y(f),V=y(u);t.exports=p["default"].createClass({displayName:"RealtyAdditional",mixins:[h["default"].connect(m["default"])],getDefaultProps:function(){return{Style:{width:{width:"100%",display:"inline-block",cursor:"default"},displayInline:{display:"inline-block"},bg:{backgroundColor:"#d9edf7",color:"5E6061"}}}},onView:function(e){b["default"].getRealtyImg(e._id),A["default"].closeViewRealty(),V["default"].view(),A["default"].viewRealty(),w["default"].sendAddress(e.address),w["default"].sendMapCoordinate(e.mapCoordinates),M["default"].setInput(e)},onRemove:function(e){V["default"].exit(),v["default"].removeRealty(e._id)},onChangeActiveParam:function(e){V["default"].exit(),v["default"].changeRealtyActiveParam(e)},render:function(){return console.log(this.props.realty),p["default"].createElement("aside",{className:"col-sm-6 pull-right"},this.state.view?p["default"].createElement(R["default"],{readable:this.state.readable,content:this.props.content.view,language:this.props.language}):this.props.realty[0]?p["default"].createElement(g["default"],{realty:this.props.realty,data:this.props.data,labels:this.props.labels,language:this.props.language,Style:this.props.Style,click:[this.onView,this.onRemove,this.onChangeActiveParam]}):"")}})});