import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodosView from '../views/TodosView.vue';
import PostsView from '../views/PostsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/todos',
      name: 'Todos',
      component: TodosView,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: PostsView,
    },
  ],
});

export default router;
