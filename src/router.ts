/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-02-18 22:44:23
 */
import Koa from "koa";
import KoaRouter from "koa-router";
import homeCtr from './controller/home';

const router = new KoaRouter();

export default (app: Koa) => {
    router.get("/", homeCtr.index);
    
    router.get("/home", homeCtr.home);
    
    router.get("/404", async (ctx, next) => {
        ctx.response.body = "<h1>404 Not Found</h1>";
    });
    
    // 增加如下代码
    router.get("/home/:id/:name", homeCtr.homeParams);
    
    // 增加返回表单页面的路由
    router.get("/user", homeCtr.login);
    
    // 增加响应表单请求的路由
    router.post("/user/register", homeCtr.register);

    // add router middleware:
    app.use(router.routes()).use(router.allowedMethods())
}