<!--
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-02-07 21:49:13
-->
# koa2-tutorial
node 实战


## 第一阶段
- 环境准备
```shell
npm i
npm run dev
```

- 中间件用法
- 路由koa-router
- POST/GET请求

## pm2管理
- pm2 安装在项目中时
```shell
// 启动 ts 文件必须安装 typescript
npx pm2 install typescript

// 启动
npx pm2 start ./src/app.ts

// 停止
npx pm2 stop all
```
