const Vue = require("vue");
import App from "./App.vue";

import { createRouter } from "./router/router";
import { createStore } from "./store/store";
import { sync } from "vuex-router-sync";

export function createApp() {
  const router = createRouter();
  const store = createStore();
  sync(router, store);
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return { app, router, store };
}
