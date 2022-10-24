<script setup lang="ts">
import fetchHeader from '@/utils/fetchHeader'
import { reactive, onMounted, ref } from 'vue'
import Todo from '../types/Todo'
import TodoItem from './TodoItem.vue'
import CardSkeleton from './ui/CardSkeleton.vue'

const USER_ID = process.env.VUE_APP_USER_ID

let todosArr: Todo[] = reactive([])
let loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    const todosResponse = await fetch(`https://gorest.co.in/public/v2/users/${USER_ID}/todos`, {
      method: 'GET',
      headers: fetchHeader,
    })
    const todosData: Todo[] = await todosResponse.json()

    if (todosData?.length) {
      todosData.forEach((todo) => todosArr.push(todo))
    }

  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="flex flex-wrap" v-if="todosArr.length && !loading">
    <TodoItem
      v-for="(todo, index) in todosArr"
      :key="index"
      :title="todo.title"
      :status="todo.status"
      :due_on="todo.due_on"
    />
  </div>
  <div v-else class="flex justify-between flex-wrap">
    <div class="px-2 basis-full md:basis-1/2 lg:basis-1/3 mb-3 lg:mb-0" v-for="i in 3" :key="i">
      <CardSkeleton></CardSkeleton>
    </div>
  </div>
</template>

<style scoped></style>
