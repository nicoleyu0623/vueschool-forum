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

    <div class="post"
         v-for="postId in threads.posts" :key="postId">

    </div>

  </div>
</template>

<script setup>

import {defineProps, reactive} from 'vue'
import sourceData from '@/data.json'

const posts = reactive(sourceData.posts)
const users = reactive(sourceData.users)

// setup-compiler-macros
// const props =
defineProps(
  {
    threads: {
      type: Array,
      required: true
    }
  }
)

function getPostById(postId) {
  return posts.find(p => p.id === postId)
}

function getUserById(userId) {
  return users.find(p => p.id === userId)
}
</script>

<style scoped>

</style>
