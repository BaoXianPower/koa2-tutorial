/*
 * @Descripttion:
 * @version:
 * @Author: jbx
 * @Date: 2021-02-18 23:07:07
 */
export default {
    register: async (name: string, password: string) => {
        let data: any;

        if (name === "ikcamp" && password === "123456") {
            data = {
                status: 0,
                data: {
                    title: "个人中心",
                    content: "欢迎进入个人中心",
                },
            };
        } else {
            data = {
                status: -1,
                data: {
                    title: "登录失败",
                    content: "请输入正确的账号信息",
                },
            };
        }

        return data;
    },
};
