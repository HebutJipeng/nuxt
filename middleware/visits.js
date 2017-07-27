export default function ({ store, route, redirect }) {
  console.log(route.path)
  store.commit('ADD_VISIT', route.path)
}
