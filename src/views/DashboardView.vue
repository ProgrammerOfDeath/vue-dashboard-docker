<script setup lang="ts">
import AppCard from '../components/ui/AppCard.vue'
import AppMain from '../components/layout/AppMain.vue'
</script>

<template>
  <AppMain>
    <h1>My Dashboard</h1>
    <div>
      <h2>Latest Posts</h2>
      <div class="flex">
        <AppCard>
          <h3>Post</h3>
        </AppCard>
      </div>
    </div>
  </AppMain>
</template>

<style></style>
