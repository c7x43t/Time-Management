var _a = require('server').router, get = _a.get, post = _a.post, put = _a.put, del = _a.del;
module.exports = [
    get('/', function (ctx) { return 'Hello world'; }),
    post('/', function (ctx) {
        console.log(ctx.data);
        return 'ok';
    }),
    get('/api', function (ctx) {
        return 'api';
    })
];
