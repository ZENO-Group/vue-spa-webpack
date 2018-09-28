<template>
  <div class="top-bar">
    <div class="app-logo no-select" @click="() => { this.$router.replace('/') }">
      <el-badge value="admin" class="app-logo__admin-badge">
        <img class="mgr-10" src="../../assets/TradeX-Logo-2.svg" width="100" height="64" alt="">
      </el-badge>
    </div>
    <div class="top-bar__toolbar">
      <el-button type="primary" round>wenyan09</el-button>
      <div class="logout" @click="logout">Log Out</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    logout () {
      this.$store.dispatch('FedLogOutToLogin')
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
