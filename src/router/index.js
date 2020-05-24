import Vue from 'vue'

import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
	mode: 'hash',
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
		},
		{ 
			path: '/folder/:fold',
			name: "folder",
			component: () =>
				import(/* webpackChunkName: "folder" */ "@/views/Folders"),
		},
		{ 
			path: '/folder/:fold/document/:doc',
			name: "document",
			component: () =>
				import(/* webpackChunkName: "folder" */ "@/views/Documents"),
		}
	]
});

export default router
