<template>
  <div class="sidebar">
    <scroll-bar>
      <el-menu
        default-active="5-1"
        :collapse="false"
        class="zeno-menu"
        @open="handleOpen"
        @close="handleClose"
        background-color="#fff"
        text-color="#000"
        active-text-color="#000"
        router>
        <el-menu-item index="/order/list">
          <template slot="title">
            <i class="el-icon-mobile-phone
"></i>
            <el-badge :value="200" :max="99">
              <div>Orders</div>
            </el-badge>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <template slot="title">
            <i class="el-icon-share"></i>
            <el-badge :value="27" :max="99" >
              <div>Dealers</div>
            </el-badge>
          </template>
        </el-menu-item>
        <el-menu-item index="3">
          <template slot="title">
            <i class="el-icon-edit"></i>
            <span>News</span>
          </template>
        </el-menu-item>
        <el-menu-item index="4">
          <template slot="title">
            <i class="el-icon-message"></i>
            <el-badge :value="10" :max="99" >
              <div>Feedback</div>
            </el-badge>
          </template>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-more"></i>
            <span>Settings</span>
          </template>
          <el-menu-item index="5-1">Car Model List</el-menu-item>
          <el-menu-item index="5-2">Trade Policy</el-menu-item>
          <el-menu-item index="5-2">Privacy Policy</el-menu-item>
        </el-submenu>
      </el-menu>
    </scroll-bar>
  </div>
</template>
<script>
import ScrollBar from '../ScrollBar'
export default {
  components: {
    ScrollBar
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
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
