const {get,post,put,del} = require('server').router;
module.exports=[
    get('/', ctx => 'Hello world'),
    post('/', ctx => {
      console.log(ctx.data);
      return 'ok';
    }),
    get('/api', ctx => {
      return 'api';
    }),
    get('/abc',ctx=>{
      console.log(ctx);
    }),
    post('/login',ctx=>{
      ctx.username
    })
  ]