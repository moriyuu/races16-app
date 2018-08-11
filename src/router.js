import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import RaceModal from "./pages/RaceModal.vue";
import About from "./pages/About.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "races/:raceId",
        component: RaceModal
      }
    ]
  },
  { path: "/about", component: About },
  { path: "*", component: NotFound }
];

const router = new VueRouter({ routes });

export default router;
