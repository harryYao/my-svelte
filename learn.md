进度 ：https://www.sveltejs.cn/tutorial/group-inputs


## issues: 404 /service-worker.js
修改代码后出现如下的错误
[19:19:08] 404 ─ 6.56ms ─ /service-worker.js
// https://github.com/sveltejs/template/issues/95
404 error on service-worker.js after a fresh install
可能你之前已经在localhot:5000下注册过service-worker, 打开hrome://Serviceworker-Internals/ 找到对应的service-worker 点击 Unregister即可


## dom事件传递
含有多个dom元素时，同一个事件都可传递
```js
<button on:click>
	Click me
</button>
<span on:click>
	Click me
</span>
```
