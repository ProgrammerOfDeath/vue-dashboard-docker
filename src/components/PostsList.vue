<script setup lang="ts">
import Post from '../types/Post'
import { onMounted, reactive, ref } from 'vue'
import PostItem from '@/components/PostItem.vue'
import CardSkeleton from './ui/CardSkeleton.vue'

let postsArr: Post[] = reactive([])
let loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    const postsReponse = await fetch(
      'https://gorest.co.in/public/v2/posts?page=1&per_page=20'
    )
    const postsData: Post[] = await postsReponse.json()

    postsData?.forEach((post) => postsArr.push(post))
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div
    class="flex justify-between flex-wrap"
    v-if="postsArr.length && !loading"
  >
    <PostItem
      v-for="(post, index) in postsArr"
      :key="index"
      :title="post.title"
      :body="post.body"
    ></PostItem>
  </div>
  <div v-else class="flex gap-3">
    <CardSkeleton class="flex-1"></CardSkeleton>
    <CardSkeleton class="flex-1"></CardSkeleton>
    <CardSkeleton class="flex-1"></CardSkeleton>
  </div>
</template>

<style scoped></style>
