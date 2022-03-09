import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

const requireComponentExample = require.context(
  './example',
  false,
  /Example[A-Z]\w+\.(vue|js)$/
)

requireComponentExample.keys().forEach((fileName) => {
  const componentConfig = requireComponentExample(fileName)
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

new Vue({
  render: h => h(App)
}).$mount('#app')
