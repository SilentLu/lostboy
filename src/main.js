import Vue from 'vue'
import App from './App.vue'
import Mint from "mint-ui";
import axios from 'axios';
//设置跨域请求保留session
axios.defaults.withCredentials=true;
//设置服务器基本请求路径
axios.defaults.baseURL="http://127.0.0.1:5050/";
Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.use(Mint);

new Vue({
  render: h => h(App),
}).$mount('#app')
