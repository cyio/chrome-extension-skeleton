# chrome-extension-skeleton

## 前后端通信
```js
// 前端
import { mainConnector, Storage } from './modules/utils'

var port  = new mainConnector();
port.name = "chrome-extension-skeleton";
port.init();
port.onMessage((msg) => {   // 监听后端，做出响应
	// console.log('frontend msg', msg)
})

// 后端
import { backgroundConnector, Storage } from './modules/utils'

var port = new backgroundConnector();
port.name = "chrome-extension-skeleton";
port.init((msg) => {
	// console.log('backend msg', msg)
	switch(msg.act){
		case "say hello":
			console.log('hello')
			port.send({act: 'world'})
			console.log('version value is ' + Storage.getValue('ver'))
			break;
	}
});
```

## localStorage 封装
```js
Storage.setValue('ver', '1.0')
Storage.getValue('ver');
```

## 与 Firefox 兼容

* [Chrome incompatibilities - Mozilla | MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities)
