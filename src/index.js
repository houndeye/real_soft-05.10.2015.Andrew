var app = require('koa')();

if (process.env.HOME) {
    process.env.HOME += '/'
}
var config = require(__dirname + '/app/config/');
var mongoose = require(__dirname + '/app/lib/mongoose');


//var log = require('/lib/log')(module);
//var HttpError = require(__dirname + '/app/error').HttpError;
var s = require(__dirname + '/app/lib/readFile');


//middleware global variable  -------------------------------------
var locals = require('koa-locals')(app, {name: 'koa app'});


//session --------------------------------
var session = require('koa-session-store');
var mongooseStore = require('koa-session-mongoose');
app.keys = [config.get('session:key')];
app.use(session({
    name: config.get('session:name'),
    store: mongooseStore.create()
}));


//bodyParser ----------------------------------

var koaBody = require('koa-better-body');
app
    .use(koaBody({
        patchKoa: true,
        multipart: true,
        formLimit: 2048,
        extendTypes: {
            json: ['application/x-javascript'],
            multipart: ['multipart/mixed'],
            form: [
                'application/x-www-form-urlencoded'
            ]
        },
        formidable: {
            uploadDir: process.env.HOME + '/src/uploads'
        }
    }));

var serve = require('koa-static');
app.use(serve(__dirname + '/..'));

//console.log(process.env)
app.use(function * (next){

    var path = __dirname + '/data.json';
    this.locals.data = yield s.readFile(path);
    yield next;
}
)



//public routes --------------------------

var Router = require('koa-router');
var pub = Router();
pub
    .get('/', function * (next){

    //console.log(process.env);
    //console.log(this.request.host);
    //console.log(process.env.CUSTOMVAR_HOSTNAME);
    var path = __dirname + '/../build/index.html';
    this.set('Content-Type', 'text/html');
    this.body = yield s.readFile(path);
    yield next;
}
)



// authentication ---------------------------
var login = require(__dirname + '/app/middleware/login');
pub
    .get('/login', function * (next){
    // console.log(this.request.host);
    this.body = this.locals.data;
    yield next;

}
)
.
post('/login', koaBody(), login.authorize);
//

//// Handle uploads files  ---------------------------------

var uploadHandler = require(__dirname + '/app/middleware/uploadHandler').uploadHandler;
pub
    .post('/uploadHandler', uploadHandler);


////Realty section ------------------------
var Realty = require(__dirname + '/app/middleware/realty').realtyQueryHandler;
//var saveImg = require('middleware/uploadHandler').save;

pub.post('/Realty', Realty);

var ImageHandler = require(__dirname + '/app/middleware/image').ImageHandler;
pub
    .post('/ImageHandler', ImageHandler);

var RealtyFind = require(__dirname + '/app/middleware/realtyFind').realtyQueryHandler;
pub
    .post('/RealtyFind', RealtyFind);


////Client section -----------------------
var Client = require(__dirname + '/app/middleware/client').clientQueryHandler;

pub
    .post('/Client', Client);

var ClientFind = require(__dirname + '/app/middleware/clientFind').clientQueryHandler;
pub
    .post('/ClientFind', ClientFind);

////--------------------
//
////User section ---------
var User = require(__dirname + '/app/middleware/user').userQueryHandler;
pub
    .post('/User', User);


var UserFind = require(__dirname + '/app/middleware/userFind').userQueryHandler;
pub
    .post('/UsertFind', UserFind);
//initStartOptions

var SliderStartOptions = require(__dirname + '/app/middleware/rentInitSliderParams').initAllStartSliderParams;
pub.post('/initStartOptions', SliderStartOptions);


////-------------------------------------
pub
    .get('/aliga', function * (next){
    if (this.session.user) {
        console.log(this.request.host);
        var path = __dirname + '/../build/index2.html';
        this.set('Content-Type', 'text/html');
        this.body = yield s.readFile(path);
        yield next;
    }
}
)



//// register ---------------------------------------
var register = require(__dirname + '/app/middleware/registerNewUser').addNewUser;
pub
    .post('/register', register);

//------------------------    ---------------------------
app
    .use(pub.middleware());
//.use(router.allowedMethods());

app.listen(process.env.PORT || '5000', function () {
    console.log(process.env.PORT || config.get('port'))
});