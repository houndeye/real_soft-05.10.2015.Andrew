define(["exports"],function(r){"use strict";function t(r,e){Error.apply(this,arguments),Error.captureStackTrace(this,t),this.status=r,this.message=e||i.STATUS_CODES[r]||"Error"}var e=(require("path"),require("util")),i=require("http");e.inherits(t,Error),t.prototype.name="HttpError",r.HttpError=t});