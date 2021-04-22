<script>
	import Test from './components/test.svelte';
	import Attr from './components/attr.svelte';
	import Domclick from './components/domclick.svelte'
	import BindGroup from './components/bindgroup.svelte'
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

<main>
	<input type="text" bind:value="{name}">
	<h1>Hello {name}!</h1>
	<h4>{str}</h4>
	<!-- <img src={src} alt=""> -->
	<Test age="{20}"></Test>
	<Attr {...attr} on:message="{handleMessage}"></Attr>
	<Domclick on:click="{handleDomClick}"></Domclick>
	<BindGroup></BindGroup>
</main>

<style>
	main {
		text-align: center;
		padding: 0.2em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	h4 {
		color: rgb(37, 116, 27);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>