import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      component: load('Index'),
      children: [
        { path: '/', component: load('Charts') },
        { path: '/products', component: load('Products/List') },
        { path: '/products/new', component: load('Products/New') },
        {
          path: '/products/:id',
          component: load('Products/View'),
          children: [
            {
              path: 'edit',
              component: load('Products/Edit')
            },
            {
              path: 'remove',
              component: load('Products/Remove')
            },
            {
              path: 'stock-in',
              component: load('Products/StockIn')
            },
            {
              path: 'stock-out',
              component: load('Products/StockOut')
            }
          ]
        }
      ]
    }, // Default
    { path: '*', component: load('Error404') } // Not found
  ]
})
