window.bus = new Vue({})

const app = new Vue({
  el: '#mainapp',
  template: `
  <div class="ui container">
    <my-title></my-title>
    <little-title></little-title>
    <click-me></click-me>
    <title-params message="salut tout le monde"></title-params>
    <title-params message="Hello 🍄"></title-params>
  </div>
  `
})
