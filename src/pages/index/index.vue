<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="页面1：index（默认显示）"/>
    <p>页面2URL：http://localhost:8081/ceshi2.html</p>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: url("../../assets/logo.png") no-repeat center top;
  background-size: 100px;
}

</style>
