define(["exports"],function(e){"use strict";var r=require(__dirname+"/../../lib/mongoose"),i=new r.Schema({userId:String,userPhone:String,active:{type:Boolean,"default":!1},type:String,kind:String,region:String,description:String,minPrice:Number,maxPrice:Number,rooms:Number,area:Number,date:{type:Date,"default":Date.now}});e.Client=r.model("clients",i)});