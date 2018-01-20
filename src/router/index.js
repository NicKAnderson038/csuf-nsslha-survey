import Vue from 'vue'
import Router from 'vue-router'
import Survey from '@/components/Survey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Survey',
      component: Survey
    }
  ],
  mode: 'history'
})
