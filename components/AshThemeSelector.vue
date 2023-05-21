<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemesStore } from '@/store/themesStore';

const { currentTheme, getAllThemes } = storeToRefs(useThemesStore());
const { setTheme } = useThemesStore();

</script>


<template>
  <select @change="setTheme($event.target!.value as typeof currentTheme.value)"
    class="overflow-hidden p-3 h-14  bg-base-darker hover:bg-base-darkest text-base-content rounded-md outline-none border-2 border-dotted hover:border-solid focus:border-solid">
    <option v-for="theme in getAllThemes" :value="theme" :selected="theme === currentTheme">{{ theme }}
    </option>
  </select>
</template>

