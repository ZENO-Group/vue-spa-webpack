<template>
  <BaseLayout>
    <div class="sidebar">
      <!-- todo: component => sideBar -->
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
  export default {
    components: {
      BaseLayout
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
