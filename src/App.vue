<template>
  <div id="app">
<!--    <component :is="'B77'" ></component>-->
    <div class="container">
      <div v-for="Exercise of components" :key="Exercise" >
       <component :is="Exercise" />
      </div>
    </div>
  </div>
</template>

<script>
import components from "./components.exercise"
export default {
  name: 'App',
computed:{
  components(){
   return Object.keys(components)
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
