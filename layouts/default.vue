<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemesStore } from '@/store/themesStore';
const { currentTheme } = storeToRefs(useThemesStore());
</script>


<template>
  <div :data-theme="currentTheme" class="p-2 h-screen w-full flex flex-row gap-2">
    <slot />
  </div>
</template>

