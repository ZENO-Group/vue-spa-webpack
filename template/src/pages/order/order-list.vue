<template>
  <div class="dashboard no-select">
    <div class="latest-orders">
      <template v-for="order in orders">
        <el-card class="box-card" :key="order.id">
          <div slot="header" class="clearfix">
            <span></span>
          </div>
          <div>
            <ul class="skeleton">
              <li style="width:95%"></li>
              <li style="width:65%"></li>
              <li style="width:80%"></li>
              <li style="width:90%"></li>
            </ul>
          </div>
          <div class="op-list">
            <el-button type="primary" :loading="loading && activeOrderId == order.id" round size="mini" @click="review(order)">Review</el-button>
            <el-button type="default" round size="mini">Add Note</el-button>
          </div>
        </el-card>
      </template>
    </div>
  </div>
</template>
<script>
import { BreadCrumb } from '../../mixins'
import { mapGetters } from 'vuex'
export default {
  mixins: [ BreadCrumb ],
  components: {},
  props: {},
  data () {
    return {
      title: 'dashboard',
      orders: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
      ],
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'activeOrderId'
    ])
  },
  methods: {
    review ({ id }) {
      this.$store.dispatch('SaveActiveOrderId', id).then(() => {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$router.push({ name: 'order-item' })
        }, 1000)
      })
    },
    back () {
      this.$router.replace(
        { name: 'order-list' }
      )
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  @import 'order-list.scss';
</style>
