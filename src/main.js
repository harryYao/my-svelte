import App from './App.svelte';
import "lbl-toast/dist/index.css"
import Toast from "lbl-toast"

// 全局配置
Toast.config({
  duration: 3000,  // 3秒,
  forbidClick: true, // 禁止背景点击
  zIndex: 999999  // z-index 层级
})

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;