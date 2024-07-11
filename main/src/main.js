import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 注册微应用
registerMicroApps([
  {
    name: "vue2Demo", // 自定义微应用名称
    entry: "http://localhost:8081/", // 微应用的入口地址，即微应用运行起来的地址
    container: "#container", // 挂载微应用内容的dom节点（此处为主应用的dom）
    activeRule: "/vue2-demo",
    // 匹配微应用的路由前缀（/#/，主应用为hash模式，在url命中时，即加载对应的微应用）
  },
]);
// 启动 qiankun
start();
