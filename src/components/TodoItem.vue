<script setup lang="ts">
import AppCard from './ui/AppCard.vue'

interface Props {
  title: string
  status: string
  due_on?: string | null
}

// eslint-disable-next-line no-undef
const props = defineProps<Props>()
</script>
<template>
  <div class="px-2 basis-full md:basis-1/2 lg:basis-1/3 mb-3">
    <AppCard class="h-full">
      <div class="form-control">
        <label class="cursor-pointer justify-start label">
          <input
            type="checkbox"
            class="checkbox checkbox-primary"
            :checked="props.status === 'completed'"
          />
          <span class="label-text ml-4">{{ props.title }}</span>
        </label>
      </div>
      <div v-if="props.due_on">
        Due on: {{ new Date(props.due_on).toDateString() }}
      </div>
    </AppCard>
  </div>
</template>

<style scoped></style>
