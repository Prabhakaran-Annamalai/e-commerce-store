import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Categories from "../views/Categories.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
