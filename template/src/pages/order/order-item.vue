<template>
  <div class="order-item">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ activeOrderId }}</span>
      </div>
      <ul class="skeleton skeleton--horizontal">
        <li class="picture"></li>
        <li class="picture"></li>
        <li class="picture"></li>
      </ul>
      <ul class="skeleton">
        <li class="detail" style="width:95%"></li>
        <li class="detail" style="width:65%"></li>
        <li class="detail" style="width:80%"></li>
        <li class="detail" style="width:90%"></li>
        <li class="detail" style="width:95%"></li>
      </ul>
    </el-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'activeOrderId'
    ])
  },
  methods: {},
  created() {
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
  @import 'order-item';
</style>
