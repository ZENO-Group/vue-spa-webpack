<template>
  <BaseLayout>
    <div class="sidebar">
      <!-- todo: component => sideBar -->
      <sidebar></sidebar>
    </div>
    <div class="main">
      <!-- todo: component => topBar -->
      <!-- todo: component => mainContent -->
      <router-view></router-view>
    </div>
  </BaseLayout>
</template>
<script>
  import BaseLayout from '@/layouts/BaseLayout'
  import { Sidebar } from '@/components'
  export default {
    components: {
      BaseLayout, Sidebar
    },
    props: {},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
</style>
