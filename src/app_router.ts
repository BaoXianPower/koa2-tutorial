/*
 * @Descripttion:
 * @version:
 * @Author: jbx
 * @Date: 2021-02-07 22:35:41
 */

import * as Koa from "koa";

const app = new Koa();

// 不使用koa-router
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.body = '<h1>index page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/home') {
//         ctx.response.body = '<h1>home page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/404') {
//         ctx.response.body = '<h1>404 Not Found</h1>';
//     } else {
//         await next();
//     }
// });

import * as KoaRouter from "koa-router";
const router = new KoaRouter();

// 添加路由
router.get("/", async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
});

router.get("/home", async (ctx, next) => {
    ctx.response.body = "<h1>HOME page</h1>";
});

router.get("/404", async (ctx, next) => {
    ctx.response.body = "<h1>404 Not Found</h1>";
});

/**
其他方式处理路由
router
    .get("/", async (ctx, next) => {
        ctx.body = "Hello World!";
    })
    .post("/users", async (ctx, next) => {
        // ...
    })
    .put("/users/:id", async (ctx, next) => {
        // ...
    })
    .del("/users/:id", async (ctx, next) => {
        // ...
    })
    .all("/users/:id", async (ctx, next) => {
        // ...
    });
*/

// all 方法
// 对路由的处理也是一种中间件
// router.all("/*", async (ctx, next) => {
//     // *代表允许来自所有域名请求
//     ctx.set("Access-Control-Allow-Origin", "*");
//     // 其他一些设置...
//     await next();
// });

// 命名路由
// router.get('user', '/users/:id', function (ctx, next) {
//     // ... 
//   });
  
//   router.url('user', 3);
//   // => 生成路由 "/users/3" 
   
//   router.url('user', { id: 3 });
//   // => 生成路由 "/users/3" 
   
//   router.use(function (ctx, next) {
//     // 重定向到路由名称为 “sign-in” 的页面 
//     ctx.redirect(ctx.router.url('sign-in'));
//   })

// 多中间件
// router.get(
//     '/users/:id',
//     function (ctx, next) {
//       return User.findOne(ctx.params.id).then(function(user) {
//         // 首先读取用户的信息，异步操作
//         ctx.user = user;
//         next();
//       });
//     },
//     function (ctx) {
//       console.log(ctx.user);
//       // 在这个中间件中再对用户信息做一些处理
//       // => { id: 17, name: "Alex" }
//     }
//   );

// 嵌套路由
// var forums = new Router();
// var posts = new Router();
 
// posts.get('/', function (ctx, next) {...});
// posts.get('/:pid', function (ctx, next) {...});
// forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());
 
// 可以匹配到的路由为 "/forums/123/posts" 或者 "/forums/123/posts/123"
// app.use(forums.routes());

// 路由前缀
// var router = new Router({
//     prefix: '/users'
//   });
   
//   router.get('/', ...); // 匹配路由 "/users" 
//   router.get('/:id', ...); // 匹配路由 "/users/:id" 

// 调用路由中间件
app.use(router.routes());

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});
