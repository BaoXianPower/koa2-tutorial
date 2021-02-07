/*
 * @Descripttion:
 * @version:
 * @Author: jbx
 * @Date: 2021-02-07 21:51:53
 */
import * as Koa from "koa";

const app = new Koa();

// middleware 中间件
// 每收到一个 http 请求，
// Koa 都会调用通过 app.use() 注册的 async 函数，
// 同时为该函数传入 ctx 和 next 两个参数。
// 而这个 async 函数就是我们所说的中间件
app.use(async (_ctx, next) => {
    // ctx 作为上下文使用，包含了基本的 ctx.request 和 ctx.response。
    // 另外，还对 Koa 内部对一些常用的属性或者方法做了代理操作，使得我们可以直接通过 ctx 获取
    // Koa 还约定了一个中间件的存储空间 ctx.state。
    // 通过 state 可以存储一些数据，比如用户数据，版本信息等

    // next 参数的作用是将处理的控制权转交给下一个中间件，
    // 而 next() 后面的代码，
    // 将会在下一个中间件及后面的中间件（如果有的话）执行结束后再执行
    // 中间件的顺序很重要！

    console.log("中间件xxx doSomething");
    await next();
    console.log("中间件xxx end");
});

// 记录执行的时间
app.use(async (ctx, next) => {
    let stime = new Date().getTime();
    await next();
    let etime = new Date().getTime();
    ctx.response.type = "text/html";
    ctx.response.body = "<h1>Hello World</h1>";
    console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`);
});

app.use(async (_ctx, next) => {
    console.log("中间件1 doSomething");
    await next();
    console.log("中间件1 end");
});

app.use(async (_ctx, next) => {
    console.log("中间件2 doSomething");
    // 没有 next() 后面的中间件都不会执行
    // await next();
    console.log("中间件2 end");
});

app.use(async (_ctx, next) => {
    console.log("中间件3 doSomething");
    await next();
    console.log("中间件3 end");
});

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});
