<script>
	import marked from 'marked';
	let value = `Some words are *italic*, some are **bold**`;
</script>

<style>
	textarea { width: 500px; height: 200px; }
</style>

<textarea bind:value></textarea>

{@html marked(value)}