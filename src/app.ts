/*
 * @Descripttion:
 * @version:
 * @Author: jbx
 * @Date: 2021-02-07 22:59:51
 */

/*
 * @Descripttion:
 * @version:
 * @Author: jbx
 * @Date: 2021-02-07 21:51:53
 */
import Koa from "koa";
import router from "./router";
import middleware from "./middleware/index";

const app = new Koa();

middleware(app);
router(app);

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});
