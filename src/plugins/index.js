const requireComponent = require.context('./', true, /\.vue$/)
const install = Vue => {
  if(install.installed) return;
  requireComponent.keys().forEach(key => {
    const config = requireComponent(key)
    const name = config.default.name
    Vue.component(name, config.default || config)
  })
  install.installed = true
}
export default {
  install
}