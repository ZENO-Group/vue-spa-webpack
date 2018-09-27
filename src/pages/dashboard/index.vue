<template>
  <div class="dashboard no-select">
    <div class="latest-orders">
      <template v-for="order in orders">
        <el-card class="box-card" :class="{ 'box-card--active': activeOrderId == order.id }" v-show="!!!activeOrderId || activeOrderId == order.id" :key="order.id">
          <div slot="header" class="clearfix">
            <el-button v-if="activeOrderId == order.id" @click="back" size="small" type="primary" icon="el-icon-back" round></el-button>
            <span v-else> Order {{ order.id }}</span>
          </div>
          <template v-if="activeOrderId !== order.id">
            <div>
              <ul class="skeleton">
                <li style="width:95%"></li>
                <li style="width:65%"></li>
                <li style="width:80%"></li>
                <li style="width:90%"></li>
              </ul>
            </div>
            <div class="op-list">
              <el-button type="primary" round size="mini" @click="review(order)">Review</el-button>
              <el-button type="default" round size="mini">Add Note</el-button>
            </div>
          </template>
          <template v-else>

          </template>
        </el-card>
      </template>
    </div>

  </div>
</template>
<script>
import { BreadCrumb } from '../../mixins'
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
      activeOrderId: ''
    }
  },
  computed: {},
  methods: {
    review ({ id }) {
      this.activeOrderId = id
    },
    back() {
      this.activeOrderId = ''
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  @import 'index.scss';
</style>
