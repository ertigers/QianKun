import "./public-path";
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import qiankun from 'qiankun';

import './index.css'

// 创建 Vue 应用实例
const app = createApp(App);

// 使用 qiankun 插件
app.use(qiankun.VuePlugin);

// 配置路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 定义微服务的路由规则
    {
      base: window.__POWERED_BY_QIANKUN__ ? "/vue2-demo" : "/",
      mode: "history",
      routes,
    }
  ],
});

app.use(router);

// 挂载微服务应用
app.mount('#app');


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('Vue 3 micro app is bootstrapping...');
  // 这里可以执行一些初始化操作
}

export async function mount(props) {
  console.log('Vue 3 micro app is mounting...');
  // 这里可以访问 props 参数，执行挂载操作
}

export async function unmount(props) {
  console.log('Vue 3 micro app is unmounting...');
  // 这里可以执行卸载操作
}