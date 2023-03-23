import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  routeRules: {
    '/test': {
      headers: {
        'x-xss-protection': '1',
      }
    }
  }
})