import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/Home.vue"),
        },
        {
            path: "/video",
            name: "VideoStreaming",
            component: () => import("../views/VideoStreaming.vue"),
        },

        {
            path: '/learn-exercise',
            name: 'LearnExercise',
            component: () => import('../views/LearnExercise.vue'),
        },
        
        {
            path: "/learn/squat",
            name: "SquatGuide",
            component: () => import("../views/SquatGuide.vue"),
        },
        {
            path: "/learn/pushup",
            name: "PushupGuide",
            component: () => import("../views/PushupGuide.vue"),
        },
        {
            path: "/learn/bicep",
            name: "BicepGuide",
            component: () => import("../views/BicepGuide.vue"),
        },

        {
            path: "/learn/plank",
            name: "PlankGuide",
            component: () => import("../views/PlankGuide.vue"),
        },
        {
            path: "/learn/lunges",
            name: "LungesGuide",
            component: () => import("../views/LungesGuide.vue"),
        },

        /*{
            path: "/exercise-selection",
            beforeEnter() {
                window.location.href = "http://localhost:5000"; // Redirects to Flask backend
            },
        },
        */{
            path: '/exercise-selection',
            name: 'ExcerciseSelection',
            component: () => import("../components/ExcerciseSelection.vue"),
        },/*
        {
            path: '/webcam',
            name: 'Webcam',
            component: () => import("../components/Webcam.vue"),
        },*/
        {
            path: "/:pathMatch(.*)*",
            redirect: { name: "Home" },
        },
    ],
});

export default router;
