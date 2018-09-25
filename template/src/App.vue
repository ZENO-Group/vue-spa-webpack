<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <Home/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Home from './pages/home'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Home
  }{{/router}}
}
</script>

<style lang="scss">
  /* global style */
  @import './styles/app.scss';
</style>
