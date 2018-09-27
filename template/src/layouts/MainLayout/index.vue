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
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">Order</a></el-breadcrumb-item>
            <el-breadcrumb-item>Box View</el-breadcrumb-item>
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
export default {
  components: {
    BaseLayout, SideBar, TopBar, FooterBar
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
