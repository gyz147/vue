import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

new Vue({
  el: '#app',
  //配置store选项，指定为store对象，会自动将store对象注入到所有的子组件中
  //通过this.$store访问
  store,
  render: h => h(App)
})
