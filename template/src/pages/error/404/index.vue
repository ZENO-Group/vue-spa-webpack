<template>
  <div class="not-found">
    <img src="../../../assets/error.svg" width="200" alt="">
    <span class="footnote">
        <p>
          Nothing Found Here
        </p>
        <p class="footnote__tips">
          tips: please verify the url
        </p>
    </span>
  </div>
</template>
<script>
import { BreadCrumb } from '../../../mixins'
export default {
  mixins: [ BreadCrumb ],
  components: {},
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
