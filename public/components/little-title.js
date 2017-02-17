Vue.component('little-title', {
  template: `
    <h2>{{ title }}</h2>
  `,
  data: () => {
    return {
      title: 'Hi peeps 🐹'
    }
  },
  mounted: function() {
    console.log("little-title created")
    bus.$on('message', (data) => {
      console.log("🍄", data)
      this.title = "Hello guys 🦁 ..."
    })
  },
  methods: {

  }
});
