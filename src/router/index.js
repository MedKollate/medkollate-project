import { createRouter, createWebHistory } from "vue-router";
import patientsData from "../views/patientsData.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "patient's Data",
      component: patientsData,
    },
    {
      path: "/charts",
      name: "charts",
      component: () => import("../views/charts.vue"),
    },
    {
      path: "/images",
      name: "images",
      component: () => import("../views/images.vue"),
    },
    {
      path: "/labResults",
      name: "labResults",
      component: () => import("../views/labResults.vue"),
    },
    {
      path: "/payments",
      name: "payments",
      component: () => import("../views/payments.vue"),
    },
    {
      path: "/clinicalOrder",
      name: "clinical Order",
      component: () => import("../views/clinicalOrder.vue"),
    },
    {
      path: "/progressNote",
      name: "progress note",
      component: () => import("../views/progressNote.vue"),
    },
    {
      path: "/diagnosis",
      name: "diagnosis",
      component: () => import("../views/diagnosis.vue"),
    },
    {
      path: "/clinicalTasks",
      name: "clinical tasks",
      component: () => import("../views/clinicalTasks.vue"),
    },
    {
      path: "/wardHistory",
      name: "ward history",
      component: () => import("../views/wardHistory.vue"),
    },
    {
      path: "/outgoingRefferal",
      name: "outgoing refferal",
      component: () => import("../views/outgoingRefferal.vue"),
    },
    {
      path: "/dischargeSummary",
      name: "discharge summary",
      component: () => import("../views/dischargeSummary.vue"),
    },
    {
      path: "/bookAppointment",
      name: "book appointment",
      component: () => import("../views/bookAppointment.vue"),
    },

  ],
});

export default router;
