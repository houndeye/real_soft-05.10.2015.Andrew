define(["exports","module","react","reflux","../../Actions/Rent/RentSearchMenu","../../Actions/dbRealtyActions","../../Actions/Rent/DataHandler","../../Actions/dbClientActions","../../Actions/Rent/ClientHandler","../rent/SearchMenu","../rent/MainContent","../../helper/NavMenu"],function(e,t,n,a,l,s,i,o,u,c,r,d){"use strict";function f(e){return e&&e.__esModule?e:{"default":e}}var p=f(n),h=(f(a),f(l)),g=f(s),m=f(i),A=f(o),S=f(u),y=f(c),v=f(r),M=f(d);t.exports=p["default"].createClass({displayName:"Index",getInitialState:function(){return{eventKey:"home"}},onSelect:function(e){this.setState({eventKey:e}),h["default"].changeSearchMenu(e,this.props.content,this.props.language)},componentDidMount:function(){g["default"].getStartSliderOptions(),h["default"].changeSearchMenu(this.state.eventKey,this.props.content,this.props.language),A["default"].findAllActiveClients(S["default"].setClients),g["default"].findAllActiveRealty(m["default"].setRealty),g["default"].getAllImages()},render:function(){return console.log(this.props,this.state),p["default"].createElement("main",null,p["default"].createElement(M["default"],{classes:"col-sm-2",onSelect:this.onSelect,activeKey:this.state.eventKey,data:this.props.content.menu.types,languagePar:this.props.language}),p["default"].createElement(y["default"],null),p["default"].createElement(v["default"],{labels:this.props.content.mainSection[this.state.eventKey]}))}})});