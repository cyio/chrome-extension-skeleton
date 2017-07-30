import Vue from 'vue'
import { mainConnector, Storage } from './modules/utils'

var port  = new mainConnector();
port.name = "chrome-extension-skeleton";
port.init();
port.onMessage((msg) => {
  // console.log('frontend msg', msg)
})

Vue.config.productionTip = false
Vue.config.devtools = false

var app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  },
  computed: {
  },
  mounted () {
		Storage.setValue('ver', '1.0')
    port.send({act: 'say hello'})
  },
  render (h) { // <-- h must be in scope
    return (
      <div class='container'>
        <h1>Hello Chrome</h1>
      </div>
    )
  }
})
