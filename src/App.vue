<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <hi></hi>
  </div>
</template>

<script>
import Hello from './components/Hello'
import hi from './components/hi'

export default {
  name: 'app',
  components: {
    Hello,
    hi
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetic a, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
