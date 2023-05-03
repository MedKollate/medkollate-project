import { createRouter, createWebHistory } from "vue-router";
import patientsData from "../views/patientsData.vue";
import homePage from "../views/homePage.vue";
import aboutUs from "../views/aboutUs.vue";
import contactUs from "../views/contactUs.vue";
import ourServices from "../views/ourServices.vue";
import registerPage from "../views/registerPage.vue";
import registerHealth from "../views/registerHealth.vue";
import registerPortal from "../views/registerPortal.vue";
import registerStaff from "../views/registerStaff.vue";
import registerPatient from "../views/registerPatient.vue";
import patientDash from "../views/patientDashboard.vue";
import staffID from "../views/staffID.vue";
import patientContact from "../views/patientContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home Page",
      component: homePage,
    },
    {
      path: "/about",
      name: "About Us",
      component: aboutUs,
    },
    {
      path: "/Services",
      name: "Our Services",
      component: ourServices,
    },
    {
      path: "/contact",
      name: "Contact Us",
      component: contactUs,
    },
    {
      path: "/register",
      name: "Register Page",
      component: registerPage,
    },
    {
      path: "/registerHealth",
      name: "Register Health",
      component: registerHealth,
    },
    {
      path: "/registerPortal",
      name: "Register Portal",
      component: registerPortal,
    },

    {
      path: "/registerStaff",
      name: "Register Staff",
      component: registerStaff,
    },
    {
      path: "/staffID",
      name: "Staff ID",
      component: staffID,
    },
    {
      path: "/registerPatient",
      name: "Register Patient",
      component: registerPatient,
    },
    {
      path: "/patientContact",
      name: "Patient Emergency Contact",
      component: patientContact,
    },
    {
      path: "/patientDash",
      name: "Patient Dashboard",
      component: patientDash,
    },
    {
      path: "/patientData",
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