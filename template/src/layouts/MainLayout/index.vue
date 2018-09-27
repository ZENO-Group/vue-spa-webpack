<template>
  <BaseLayout>
    <el-container>
      <el-header height="64px">
        <top-bar></top-bar>
      </el-header>
      <el-main>
        <el-aside width="200px">
          <side-bar></side-bar>
        </el-aside>
        <div class="main-content">
          <el-breadcrumb class="no-select" v-if="breadcrumb" separator="/">
            <template v-for="route in currentRoute">
              <el-breadcrumb-item :key="route.path" :to="{ path: route.path }">{{ route.meta ? route.meta.display: '' }}</el-breadcrumb-item>
            </template>
          </el-breadcrumb>
          <router-view></router-view>
          <footer-bar></footer-bar>
        </div>
      </el-main>
    </el-container>
  </BaseLayout>
</template>
<script>
import BaseLayout from '@/layouts/BaseLayout'
import { SideBar, TopBar, FooterBar } from '@/components'
import { mapGetters } from 'vuex'
export default {
  components: {
    BaseLayout, SideBar, TopBar, FooterBar
  },
  props: {},
  data () {
    return {
      routes: []
    }
  },
  computed: {
    ...mapGetters([
      'breadcrumb',
      'currentRoute'
    ])
  },
  watch: {
    'currentRoute': {
      handler (newVal, oldVal) {
        console.log('val', newVal)
      },
      deep: true
    }
  },
  methods: {

  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
