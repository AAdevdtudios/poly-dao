import {defineNuxtPlugin} from '#app'
import Donut from 'vue-css-donut-chart';
import VueCarousel from "vue3-carousel";


import * as ChartJs from 'chart.js'
const {Chart, registerables }= ChartJs;

export default defineNuxtPlugin(nuxtApp =>{
    nuxtApp.vueApp.use(Donut)
    // nuxtApp.vueApp.use(VueCarousel)
    Chart.register(...registerables)
})