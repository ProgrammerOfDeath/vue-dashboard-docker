<script setup lang="ts">
import AppCard from './ui/AppCard.vue'

interface Props {
  title: string
  status: string
}

// eslint-disable-next-line no-undef
const props = defineProps<Props>()
</script>
<template>
  <AppCard class="basis-full md:basis-1/2 lg:basis-1/3 mb-5">
    <h3 class="card-title">{{ props.title }}</h3>
    <p>{{ props.status }}</p>
  </AppCard>
</template>

<style scoped></style>
