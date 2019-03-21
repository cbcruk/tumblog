import Vue from 'vue/dist/vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('.', false, /[\w-]+\.vue$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/_/, '').replace(/\.\w+$/, ''))
  )

  Vue.component(
    'Tumblr' + componentName,
    componentConfig.default || componentConfig
  )
})
