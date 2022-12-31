import { createApp } from 'vue'
import App from './App.vue'

const forumApp = createApp(App)

// use component
forumApp.component('Nice-button', {}) // name, component

// use plugin
// forumApp.use(SomePlugin)
forumApp.mount('#app')
