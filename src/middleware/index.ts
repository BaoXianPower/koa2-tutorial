/*
 * @Descripttion:
 * @version:
 * @Author: jbx
 * @Date: 2021-02-19 00:10:11
 */
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import nunjucks from "koa-nunjucks-2";
import path from "path";
import staticFiles from "koa-static";
import miSend from "./mi-send/index";
import miLog from "./mi-log/index";
import ip from "ip";
import miHttpError from "./mi-http-error/index";
import miRule from "./mi-rule/index";

export default (app: Koa) => {
    /**
     * 在接口的开头调用
     * 指定 controller 文件夹下的 js 文件，挂载在 app.controller 属性
     * 指定 service 文件夹下的 js 文件，挂载在 app.service 属性
     * TS 下不太好弄, 后面在改
     */
    miRule({
        app,
        rules: [
            {
                folder: path.join(__dirname, "../controller"),
                name: "controller",
            },
            {
                folder: path.join(__dirname, "../service"),
                name: "service",
            },
        ],
    });

    app.use(
        miHttpError({
            errorPageFolder: path.resolve(__dirname, "../errorPage"),
        })
    );

    // 将配置中间件的参数在注册中间件时作为参数传入
    app.use(
        miLog({
            env: app.env, // koa 提供的环境变量
            projectName: "koa2-tutorial",
            appLogLevel: "debug",
            dir: "logs",
            serverIp: ip.address(),
        })
    );

    // 指定 public目录为静态资源目录，用来存放 js css images 等
    app.use(staticFiles(path.resolve(__dirname, "../public")));

    app.use(
        nunjucks({
            ext: "html",
            path: path.join(__dirname, "../views"), // 指定视图目录
            nunjucksConfig: {
                trimBlocks: true, // 开启转义 防Xss
            },
        })
    );

    app.use(bodyParser());
    app.use(miSend());
};
