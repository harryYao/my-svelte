<div>
  <p>{`My name is ${name}, my lasted version is ${version}, ${desc}. ${$$props.date}`}</p>
  <button  on:click="{ handleClick }">获取数据</button>
  {#await promise}
    <p>...waiting</p>
  {:then number}
    <p>The result is: {JSON.stringify(number)}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
<div class="mousebox" on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<script>
  export let name;
  export let version;
  export let desc;

  let url = 'http://poetry.apiopen.top/sentences';
  let promise = getdata();
  async function getdata() {
    const res = await fetch(url);
		const json = await res.json();
    if (res.ok) {
      return json;
    } else {
      throw new Error(json)
    }
  }
  function handleClick() {
    promise = getdata();
  }
  let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<style>
  .mousebox {
    text-align: left;
    margin: auto;
    width: 600px;
    height: 300px;
    border: 1px solid #345678;
  }
</style>