define(["exports","module","reflux","../Actions/dbRealtyActions","../Actions/MyOffice/Realty/ImageDb","../Actions/Rent/ImageHandler","../helper/ajax","../Actions/MyOffice/Realty/View/GetRealtyImg","../Actions/MyOffice/GetAllUserRealty","../Actions/Rent/GetParameters"],function(e,t,n,i,l,s,a,o,c,d){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}var f=u(n),R=u(i),r=u(l),y=u(s),A=u(o),g=u(c),b=u(d);t.exports=f["default"].createStore({listenables:R["default"],onGetStartSliderOptions:function(){a.DbRequest("initStartOptions",{},{}).done(function(e,t){"success"==t&&b["default"].getSliderParameters(e)}.bind(this))},onFindAllActiveRealty:function(e){a.DbRequest("RealtyFind","findAllActiveRealty",{}).done(function(t,n){"success"==n&&e(t)}.bind(this))},onFindAllUserRealty:function(){a.DbRequest("RealtyFind","findAllUserRealty",{}).done(function(e,t){"success"==t&&g["default"].getAllUserRealty(e)}.bind(this))},onFindAllActiveRealtyWithParams:function(e,t){console.log(e),a.DbRequest("RealtyFind","findAllActiveRealtyWithParams",e).done(function(e,n){"success"==n&&t(e)}.bind(this))},onGetRealtyImg:function(e){a.DbRequest("RealtyFind","getImg",e).done(function(e){r["default"].setImagesId(e),A["default"].getRealtyImg(e)}.bind(this))},onGetAllImages:function(){a.DbRequest("RealtyFind","getAllImages",{}).done(function(e){y["default"].setImages(e)}.bind(this))}})});