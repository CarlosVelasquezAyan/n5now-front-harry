import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import i18n from "../i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "harry-potter/characters",
        name: "harry-potter-characters",
        component: () =>
          import(
            /* webpackChunkName: "harry-potter-characters" */ "../views/harry-potter/characters/index.vue"
          ),
      },
      {
        path: "harry-potter/characters/:id",
        name: "harry-potter-characters-id",
        component: () =>
          import(
            /* webpackChunkName: "harry-potter-characters-id" */ "../views/harry-potter/characters/view/_id.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
