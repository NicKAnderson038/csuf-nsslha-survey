import Vue from "vue";
import Router from "vue-router";
import Survey from "@/components/Survey";
import Completed from "@/components/Completed";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Survey",
      component: Survey
    },
    {
      path: "/completed",
      name: "Completed",
      component: Completed
    }
  ],
  mode: "history"
});
