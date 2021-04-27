


<main>
  <div class="nav">
    <a href="/" use:link>Home</a>
    <a href="/about" use:link>About</a>
    <a href="/userinfo/123" use:link>UserInfo</a>
  </div>

	<input type="text" bind:value="{name}">
	<h1>Hello {name}!</h1>
	<h4>{str}</h4>
	<!-- <img src={src} alt=""> -->
	<Test age="{20}"></Test>
	<Attr {...attr} on:message="{handleMessage}"></Attr>
	<Domclick on:click="{handleDomClick}"></Domclick>
	<BindGroup></BindGroup>
	<Textareamd></Textareamd>
</main>

<script>
import {link} from 'svelte-spa-router';

import Test from '../components/test.svelte';
import Attr from '../components/attr.svelte';
import Domclick from '../components/domclick.svelte'
import BindGroup from '../components/bindgroup.svelte'
import Textareamd from '../components/textareamd.svelte'

export let name;
let str = '今天是个好天气！';
let src= 'assets/imgs/a.png'
let attr = {
  name: 'BenBen',
  version: '2.1.3',
  desc: ' sbsbsb. ',
  date: new Date()
}
function handleMessage (event) {
  alert(event.detail)
}
function handleDomClick(e) {
  console.log(e.target);
}
</script>

<style>
  .nav {
    display: flex;
  }
  .nav a {
    width: 100px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  
</style>