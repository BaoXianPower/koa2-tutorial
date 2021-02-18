/*
 * @Descripttion:
 * @version:
 * @Author: jbx
 * @Date: 2021-02-19 00:16:26
 */
import logger from "./logger";
export default (options) => {
    const loggerMiddleware = logger(options);

    return (ctx, next) => {
        return loggerMiddleware(ctx, next).catch((e) => {
            if (ctx.status < 500) {
                ctx.status = 500;
            }
            ctx.log.error(e.stack);
            ctx.state.logged = true;
            ctx.throw(e);
        });
    };
};