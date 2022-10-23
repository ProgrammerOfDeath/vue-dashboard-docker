<script setup lang="ts">
import AppMain from '@/components/layout/AppMain.vue'
import TodoList from '@/components/TodoList.vue'
import PostsList from '@/components/PostsList.vue'
</script>

<template>
  <AppMain>
    <h1 class="text-center text-2xl mb-6">My Dashboard</h1>
    <section class="mb-10">
      <h2 class="text-center text-xl mb-4">Latest Posts</h2>
      <PostsList></PostsList>
    </section>
    <section>
      <h2 class="text-center text-xl mb-4">My Todos</h2>
      <TodoList></TodoList>
    </section>
  </AppMain>
</template>

<style></style>
