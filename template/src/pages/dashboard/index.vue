<template>
  <div class="dashboard no-select">
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
      title: 'dashboard'
    }
  },
  computed: {},
  methods: {
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
