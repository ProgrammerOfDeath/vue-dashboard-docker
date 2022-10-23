<script setup lang="ts">
import AppCard from '../components/ui/AppCard.vue'

interface Props {
  title: string
  body: string
}

// eslint-disable-next-line no-undef
const props = defineProps<Props>()
</script>
<template>
  <div class="px-2 basis-full md:basis-1/2 lg:basis-1/3 mb-3">
    <AppCard class="h-full">
      <h3 class="card-title">{{ props.title }}</h3>
      <p>{{ props.body }}</p>
    </AppCard>
  </div>
</template>

<style scoped></style>
