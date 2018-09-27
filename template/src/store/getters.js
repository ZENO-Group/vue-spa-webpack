const getters = {
  token: state => state.user.token,
  breadcrumb: state => state.app.breadcrumb,
  activeOrderId: state => state.order.activeOrderId,
  currentRoute: state => state.app.currentRoute
}
export default getters
