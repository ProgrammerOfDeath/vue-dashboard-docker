<script setup lang="ts">
import Post from '../types/Post'
import { onMounted, reactive } from 'vue'
import PostItem from '@/components/PostItem.vue'

let postsArr: Post[] = reactive([])

onMounted(async () => {
  try {
    const postsReponse = await fetch(
      'https://gorest.co.in/public/v2/posts?page=1&per_page=20'
    )
    const postsData: Post[] = await postsReponse.json()

    postsData?.forEach((post) => postsArr.push(post))
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <div class="flex justify-between flex-wrap" v-if="postsArr.length">
    <PostItem
      v-for="(post, index) in postsArr"
      :key="index"
      :title="post.title"
      :body="post.body"
    ></PostItem>
  </div>
</template>

<style scoped></style>
