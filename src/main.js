import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ComponentExercises from "./components.exercise"
for(const key of Object.keys(ComponentExercises)){
  Vue.component(`${key}`,()=>import(`./components/${key}.vue`))
}
new Vue({
  render: h => h(App),
}).$mount('#app')
