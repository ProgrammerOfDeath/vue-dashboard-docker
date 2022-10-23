<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import Todo from '../types/Todo'
import TodoItem from './TodoItem.vue'

const USER_ID = 3668

let todosArr: Todo[] = reactive([])

onMounted(async () => {
  try {
    const todosResponse = await fetch('https://gorest.co.in/public/v2/todos')
    const todosData: Todo[] = await todosResponse.json()

    const myTodos = todosData.filter((todo) => todo.user_id === USER_ID)

    myTodos.forEach((todo) => todosArr.push(todo))
  } catch (e) {
    console.log(e)
  }
})
</script>
<template>
  <div class="flex">
    <TodoItem
      v-for="(todo, index) in todosArr"
      :key="index"
      :title="todo.title"
      :status="todo.status"
    />
  </div>
</template>

<style scoped></style>
