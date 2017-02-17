window.bus = new Vue({})

const app = new Vue({
  el: '#mainapp',
  template: `
  <div class="ui container">
    <my-title></my-title>
    <little-title></little-title>
    <click-me></click-me>
  </div>
  `
})
