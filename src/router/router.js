import Home from '../pages/Home.svelte'
import About from '../pages/About.svelte'
import UserInfo from '../pages/UserInfo.svelte'

export const routes = {
  '/' : Home,
  '/about': About,
  '/userinfo/:uid?': UserInfo
}