Vue.component('click-me', {
  template: `
    <button v-on:click="sendMessage">{{ label }}</button>
  `,
  data: () => {
    return {
      label: 'Click me 😜'
    }
  },
  methods: {
    sendMessage: function() {
      console.log("😜🐼")
      bus.$emit('message', 42)
    }
  }
});
