define(["exports","module","react","react_bootstrap"],function(e,t,l,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var i=a(l),r=a(s),p=r["default"].Panel,o=(r["default"].Label,r["default"].Button),n=r["default"].Glyphicon,c=r["default"].ButtonGroup;t.exports=i["default"].createClass({displayName:"PanelMyOfficeAdditional",getDefaultProps:function(){return{bsStyle:"info",bsSize:"small",visibility:!1}},render:function(){var e=this.props.realty.length>1?this.props.realty.map(function(e,t){return i["default"].createElement(p,{key:t,style:this.props.Style.bg,bsStyle:this.props.bsStyle,bsSize:this.props.bsSize,eventKey:t+1},i["default"].createElement(d,{data:e,dataObj:this.props.data[t],labels:this.props.labels,click:this.props.click}))}.bind(this)):i["default"].createElement(p,{key:1,style:this.props.Style.bg,bsStyle:this.props.bsStyle,bsSize:this.props.bsSize,eventKey:1},i["default"].createElement(d,{data:this.props.realty[0],dataObj:this.props.data[0],labels:this.props.labels,click:this.props.click}));return i["default"].createElement("div",{className:"hideOverflow",style:this.props.visibility?{visibility:"hidden"}:{visibility:"visible"}},e)}});var d=i["default"].createClass({displayName:"PanelContent",onClick1:function(){this.props.click[0](this.props.dataObj)},onClick2:function(){this.props.click[1](this.props.dataObj)},onClick3:function(){this.props.click[2](this.props.dataObj)},render:function(){var e={marginLeft:"-2px"};return i["default"].createElement("div",null,i["default"].createElement("h5",{className:"col-sm-2",style:{padding:0}},i["default"].createElement(c,null,i["default"].createElement(o,{bsSize:"xsmall",onClick:this.onClick3},this.props.obj?i["default"].createElement(this.props.obj):i["default"].createElement(n,{glyph:"arrow-left"})),i["default"].createElement(o,{bsSize:"xsmall",onClick:this.onClick1},this.props.obj?i["default"].createElement(this.props.obj):i["default"].createElement(n,{glyph:"search"})),i["default"].createElement(o,{bsSize:"xsmall",onClick:this.onClick2},this.props.obj?i["default"].createElement(this.props.obj):i["default"].createElement(n,{glyph:"trash"})))),i["default"].createElement("h5",{className:"col-sm-2",style:e},this.props.data[this.props.labels[0][0]]),i["default"].createElement("h5",{className:"col-sm-2"},this.props.data[this.props.labels[1][0]]," "),i["default"].createElement("h5",{className:"col-sm-3"}," ",this.props.data[this.props.labels[2][0]]),i["default"].createElement("h5",{className:"col-sm-3"},this.props.data[this.props.labels[3][0]]," "))}})});