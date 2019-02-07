import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {states} from "./meiosis";

Vue.config.productionTip = false;

const vueApp = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

//eslint-disable-next-line
states.map(state => {
    vueApp.$forceUpdate()
});
