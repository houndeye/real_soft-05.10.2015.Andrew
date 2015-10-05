define(["exports","module","../../ajax","react","dropzone","../../lib/dropzone/helpers","../../lib/dropzone/icon"],function(e,t,i,s,o,n,p){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=r(s),l=r(o),h=r(n),d=r(p);t.exports=a["default"].createClass({displayName:"DropzoneComponent",getDjsConfig:function(){var e,t={url:this.props.config.postUrl};return this.props.config.allowedFiletypes&&this.props.config.allowedFiletypes.length>0&&(t.acceptedFiled=this.props.config.allowedFiletypes),e=this.props.djsConfig?h["default"].extend(!0,{},t,this.props.djsConfig):t},componentDidMount:function(){var e=this,t=this.getDjsConfig();this.props.config.postUrl||this.props.eventHandlers.drop||console.info('Neither postUrl nor a "drop" eventHandler specified, the React-Dropzone component might misbehave.'),l["default"].autoDiscover=!1,this.dropzone=new l["default"](a["default"].findDOMNode(e),t),this.setupEvents(),this.props.img&&(console.log(3),this.props.img.forEach(function(e){var t={name:e.name,size:e.size};this.dropzone.emit("addedfile",t),this.dropzone.createThumbnailFromUrl(t,e.path),this.dropzone.emit("complete",t)}.bind(this)))},componentWillReceiveProps:function(){try{!this.props.img&&this.state.files&&(this.state.files.forEach(function(e){this.setState({files:[]})}.bind(this)),this.setState({files:[]}))}catch(e){console.log(e)}},componentWillUpdate:function(){this.props.refluxAction&&this.state.images&&this.props.refluxAction(this.state.images)},componentWillUnmount:function(){this.dropzone.destroy()},render:function(){var e=[],t=this.state.files,i=this.props.config,s=this.props.className?"filepicker dropzone"+this.props.className:"filepicker dropzone";if(i.showFiletypeIcon&&i.allowedFiletypes&&(!t||t.length<1))for(var o=0;o<this.props.config.allowedFiletypes.length;o+=1)e.push(a["default"].createElement(d["default"],{filetype:this.props.config.allowedFiletypes[o],key:"icon-component"+o}));return a["default"].createElement("div",{className:s},e,this.props.children)},getInitialState:function(){return{files:[],images:this.props.img||[]}},setupEvents:function(){var e=this.props.eventHandlers;if(this.dropzone&&e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])if("[object Array]"===Object.prototype.toString.call(e[t]))for(var i=0;i<e[t].length;i+=1)"init"===t?e[t][i](this.dropzone):this.dropzone.on(t,e[t][i]);else"init"===t?e[t](this.dropzone):this.dropzone.on(t,e[t]);this.dropzone.on("sending",function(e,t,i){i.append("api_key",846914238645592),i.append("timestamp",Date.now()/1e3|0),i.append("upload_preset","imgUploader")}),this.dropzone.on("success",function(e,t){if(e){var i=this.state.images;i||(i=[]),i.push(t),this.setState({images:i}),console.log(this.state)}}.bind(this)),this.dropzone.on("addedfile",function(e){if(e){var t=this.state.files;t||(t=[]),t.push(e),this.setState({files:t})}}.bind(this)),this.dropzone.on("removedfile",function(e){if(e){console.log(e);var t=this.state.files,i=this.state.images;if(t&&t.length>0){for(var s=0;s<t.length;s++)t[s].name===e.name&&t[s].size===e.size&&t.splice(s,1),i[s].name===e.name&&i[s].size===e.size&&i.splice(s,1);this.setState({files:t}),this.setState({images:i})}}}.bind(this))}}})});