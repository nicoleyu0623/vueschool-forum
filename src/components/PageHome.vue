<template>
  <div>Hello from child component</div>
  <div v-for="thread in threads" :key="thread.id">
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ getPostById(postId).text }}</p>
      <p>{{ getUserById(getPostById(postId).userId).name }}</p>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },

  methods: {
    getPostById(postId) {
      return this.posts.find(
        p => p.id === postId
      )
    },

    getUserById(userId) {
      return this.users.find(
        p => p.id === userId
      )
    }

  }

}
</script>

<style scoped>

</style>
