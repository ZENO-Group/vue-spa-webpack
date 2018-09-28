<template>
  <div class="login" :class="{ 'login--error': showError }" >
    <el-card>
      <div class="login__card">
        <div class="intro">
          <img src="../../../assets/TradeX-Logo-2.svg" width="100" alt="">
          <h1>Sign in</h1>
          <p>to continue to Admin Portal</p>
        </div>
        <el-form ref="form" class="login__form" :model="form" label-width="80px" label-position="top">
          <el-form-item label="Email Or Username">
            <el-input v-model="form.username" placeholder="wenyan@zeno.group"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password" placeholder="***************" type="password"></el-input>
          </el-form-item>
          <el-form-item class="bottom">
            <a class="bottom__link link">Forgot Password?</a>
            <el-button type="primary" class="bottom__next" @click="onSubmit">Sign In</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { BreadCrumb } from '../../../mixins'
export default {
  mixins: [ BreadCrumb ],
  components: {},
  props: {},
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      showError: false
    }
  },
  computed: {},
  methods: {
    onSubmit () {
      // NProgress.start()
      this.showError = true
      setTimeout(() => {
        this.showError = false
        this.$router.replace('/')
      }, 500)
      // this.$router.replace('/')
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
