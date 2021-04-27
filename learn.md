进度 ：https://www.sveltejs.cn/tutorial/contenteditable-bindings


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


## 集成sass
参考：https://github.com/KeiferJu/svelte-sass-template
依赖：https://github.com/sveltejs/svelte-preprocess
安装 npm i -D svelte-preprocess node-sass 时报错
解决： 多试几次

“E:\learning\svelte\my-svelte\node_modules\node-sass\build\binding.sln”(默认目标) (1) ->
“E:\learning\svelte\my-svelte\node_modules\node-sass\build\binding.vcxproj.metaproj”(默认目标) (2) ->
“E:\learning\svelte\my-svelte\node_modules\node-sass\build\binding.vcxproj”(默认目标) (4) ->
(Link 目标) ->
  C:\\Users\\yxls0\\AppData\\Local\\node-gyp\\Cache\\12.14.1\\x64\\node.lib : fatal error LNK1106: 文件无效或磁盘已满: 无法查找到 0x2F229C [E:\learning\svelte\my-svelte\node_modules\node
-sass\build\binding.vcxproj]