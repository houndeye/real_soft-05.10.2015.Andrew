define(["exports"],function(e){"use strict";function s(e){var s=this.session.userId;return t.addUser(e,s)}function r(e){var s=this.session.userId,r=e.Params;return t.updateUser(r,s)}function n(e){return u.findByIdAndRemove(e).exec(function(e,s){return e?(console.log(e),null):s})}var t=require(__dirname+"/../db/models/user"),u=require(__dirname+"/../db/schemas/users").User,i=new Map([["save",s],["update",r],["remove",n]]);e.userQueryHandler=regeneratorRuntime.mark(function o(e){var s,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=this.request.body.fields.queryType,r=this.request.body.fields.queryParams,n=i.get(s).bind(this),t.prev=3,t.next=6,n(r);case 6:this.response.body=t.sent,this.response.body?this.response.staus=200:(this.response.staus=200,this.response.body={}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0);case 13:return t.next=15,e;case 15:case"end":return t.stop()}},o,this,[[3,10]])})});