<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="thread in threads" :key="thread.id">
      <h2>{{ thread.title }}</h2>
      <div v-for="postid in thread.posts" :key="postid">
        <p>{{ getPostById(postid).text }}</p>
        <p>{{ getUserById(getPostById(postid).userId).name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import sourceData from '@/data.json'
import {reactive} from 'vue' // ref
// reactive could only be used in arrays or objects

const threads = reactive(sourceData.threads)
const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

function getPostById(postId) {
  return posts.find(p => p.id === postId)
}

function getUserById(userId) {
  return users.find(p => p.id === userId)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
