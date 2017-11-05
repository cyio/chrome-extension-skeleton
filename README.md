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
* manfest.json 的设置页面写法
```
  "options_ui": {
    "page": "options/options.html"
  }
```
在 chrome 里是在扩展管理页弹窗，适合设置页面比较简单的情况
另外有一些参数设置不要用，因为不兼容，无法载入
[options_ui - Mozilla | MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/options_ui)
* 命名空间，Firefox 支持 `chrome` 和 `browser`
