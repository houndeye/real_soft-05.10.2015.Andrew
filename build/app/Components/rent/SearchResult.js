define(["exports","module","react","reflux","../../helper/RentRealty","../../Actions/Rent/ShowMainInfo","../../Actions/Rent/ClientHandler","../../Actions/Rent/ImageHandler","../../Stores/Rent/ImageHandler","../../Stores/Rent/GetUsers","../rent/SliderMapDescription"],function(e,t,a,l,s,n,i,r,o,d,c){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var f=u(a),p=u(l),h=u(s),m=u(n),g=u(i),y=(u(r),u(o)),R=u(d),v=u(c);t.exports=f["default"].createClass({displayName:"SearchResult",mixins:[p["default"].connect(R["default"])],getDefaultProps:function(){return{Style:{width:{width:"100%",display:"inline-block",cursor:"default"},displayInline:{display:"inline-block"},bg:{backgroundColor:"#d9edf7",color:"5E6061"}}}},viewRealty:function(e){var t=y["default"].getImage(e._id);m["default"].click(f["default"].createElement(v["default"],{img:t&&t.image&&t.image[0]?t.image:void 0,zoom:15,width:"100%",height:250,lat:e.mapCoordinates.lat,lng:e.mapCoordinates.lng,points:[e.mapCoordinates],description:e.description}))},onClick2:function(e){g["default"].searchClients(e)},render:function(){console.log(this.state,this.props);var e,t="";return(this.state.allRealty&&this.state.allRealty.length>=1?this.state.allRealty[0]:!1)&&(e=C(this.state.allRealty,this.props.labels),t=f["default"].createElement(h["default"],{data:this.state.allRealty,realty:e,labels:this.props.labels,language:this.props.language,Style:this.props.Style,click:[this.viewRealty,this.onClick2]})),f["default"].createElement("aside",{className:"col-sm-4 scroll"},t)}});var C=function(e,t){var a=[],l=function(e){return e.map(function(e){var a={};return a[t[0][0]]=e[t[0][0]],a[t[1][0]]=e[t[1][0]],a[t[2][0]]=e.address[t[2][0]],a[t[3][0]]=e.address.stAddress.streetName,a})};return a=l(e)}});