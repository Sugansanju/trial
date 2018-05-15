import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Role from '@/components/Role'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Otp from '@/components/Otp'
import Emailverify from '@/components/Emailverify'
import Mobileverify from '@/components/Mobileverify'
import Accountdetail from '@/components/Accountdetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
  },
  {
    path: '/role',
    name: 'Role',
    component: Role
},
{
  path: '/login',
  name: 'Login',
  component:Login
},
{
  path: '/signup',
  name: 'Signup',
  component:Signup
},
{
  path: '/otp',
  name: 'Otp',
  component:Otp
},
{
  path: '/emailverify',
  name: 'Emailverify',
  component:Emailverify
},
{
  path: '/mobileverify',
  name: 'Mobileverify',
  component:Mobileverify
},
{
  path: '/accountdetail',
  name: 'Accountdetail',
  component:Accountdetail
}
  ]
})
