export default {
  created () {
    const { breadcrumb = true } = this.$route.meta
    this.$store.dispatch('ChangeBreadCrumb', breadcrumb)
  }
}
