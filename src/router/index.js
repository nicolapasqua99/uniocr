import Vue from 'vue'

import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
  mode: 'history',
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home"),
    },
    {
      path: "/new-item",
      name: "new-item",
      component: () =>
        import(/* webpackChunkName: "new-item" */ "@/components/NewItemPage"),
    }
  ]
});

export default router
