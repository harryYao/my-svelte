<script>
	import Test from './components/test.svelte';
	import Attr from './components/attr.svelte'
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
</script>

<main>
	<h1>Hello {name}!</h1>
	<h4>{str}</h4>
	<!-- <img src={src} alt=""> -->
	<Test age="{20}"></Test>
	<Attr {...attr} on:message="{handleMessage}"></Attr>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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