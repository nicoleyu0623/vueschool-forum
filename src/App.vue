<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="This is Nicole's first Vue app"/>
  <ThreadList :threads="threads"></ThreadList>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThreadList from '@/components/ThreadList'
import sourceData from '@/data.json'

export default {
  name: 'App',
  components: {
    ThreadList,
    HelloWorld
  },
  data () {
    return {
      threads: sourceData.threads
    }
  }

}
</script>

<style>
@import "assets/style.css";
@import "bootstrap/dist/css/bootstrap.css";
</style>
