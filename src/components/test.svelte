<div>
  <p class="test">{name}</p>
  <p class="showttml">{@html string}</p>
  <p>{count}</p>
  <p>{doubled}</p>
  <button on:click="{handleClick}">Add</button>
  <p>{numbers.join(' + ')} = {sum}</p>

  <button on:click="{addNumber}">Push A Number</button>
</div>

<script>
  export let age;
  let name = `I'm a test component! Export ${age}`;
  let string = `this string contains some <strong>HTML!!!</strong>`;
  let count = 0;
  $: doubled = count * 2; // 计算属性，类似VUE中的computed
  $: {
    console.log(`the count is ${count}`);
  }
  $: if (count > 10){  
    // console.warn(`the count is high - ${count}, it's need reset!`);
    count = 0;
  }
  let numbers = [1, 2, 3, 4];
  function addNumber() {
		// numbers.push(numbers.length + 1); // 数组的push splice等方法不会触发响应式
    numbers = [...numbers, numbers.length + 1]; // 需要通过赋值
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
	function handleClick() {
		count++;
	}
</script>

<style>
.test {
  color: rgb(224, 19, 207);
  font-size: 20px;
}
</style>