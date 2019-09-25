import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Start from './components/Start.vue';
import Questions from './components/Questions.vue';
import Finish from './components/Finish.vue';
import error404 from './components/error404.vue';

const routes = [
	{
		path: '/',
		component: Start
	},
	{
		name: 'test',
		path: '/test',
		component: Questions
	},
	{
		path: '/fin',
		component: Finish
	},
	{
		path: '*',
		component: error404
	}
];

export const router = new VueRouter({
	routes/*,
	mode: 'history'*/
});