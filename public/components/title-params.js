Vue.component('title-params', {
  template: `
    <h1>{{ title }}: {{message}}</h1>
  `,
  data: () => {
    return {
      title: 'this is my ✨ title'
    }
  },
  props: ['message'],  // attribute message: `<title-params message="salut tout le monde"></title-params>`
  mounted: function () {
    console.log(this.message)
  },
});
