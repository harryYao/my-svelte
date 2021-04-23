<script>
  import Router from 'svelte-spa-router'
  import { routes } from './router/router.js'
</script>
<Router {routes} />

<style>
	html, body {
		margin: 0;
		padding: 0;
	}
</style>