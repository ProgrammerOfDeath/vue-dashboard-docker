<script setup lang="ts">
import fetchHeader from '@/utils/fetchHeader'
import { reactive, onMounted, ref } from 'vue'
import Todo from '../types/Todo'
import TodoItem from './TodoItem.vue'
import CardSkeleton from './ui/CardSkeleton.vue'

const USER_ID = 3668

let todosArr: Todo[] = reactive([])
let loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    const todosResponse = await fetch('https://gorest.co.in/public/v2/todos', {
      method: 'GET',
      headers: fetchHeader,
    })
    const todosData: Todo[] = await todosResponse.json()

    const myTodos = todosData.filter((todo) => todo.user_id === USER_ID)

    myTodos.forEach((todo) => todosArr.push(todo))
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
})
</script>
<template>
  <div class="flex gap-3" v-if="todosArr.length && !loading">
    <TodoItem
      v-for="(todo, index) in todosArr"
      :key="index"
      :title="todo.title"
      :status="todo.status"
      :due_on="todo.due_on"
    />
  </div>
  <div class="flex gap-3" v-else>
    <CardSkeleton class="flex-1"></CardSkeleton>
    <CardSkeleton class="flex-1"></CardSkeleton>
    <CardSkeleton class="flex-1"></CardSkeleton>
  </div>
</template>

<style scoped></style>
