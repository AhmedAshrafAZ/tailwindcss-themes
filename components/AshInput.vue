<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useThemesStore } from '@/store/themesStore';

const { currentColor } = storeToRefs(useThemesStore());
let message = ref('');

</script>


<template>
  <div class="flex flex-col lg:flex-row gap-4 w-full">
    <textarea v-model="message" placeholder="Type something here..."
      :class="`resize-none w-full lg:w-1/2 p-3 overflow-hidden rounded-lg outline-none border-2 border-dotted focus:border-solid focus:border-${currentColor} bg-base-darker hover:bg-base-darkest focus:bg-base-darkest text-base-content`"></textarea>
    <p
      :class="`w-full lg:w-1/2 text-justify hover:bg-${currentColor}-focus bg-${currentColor} text-${currentColor}-content p-3 rounded-md`">
      {{ message.trim() === '' ? 'Type something in the input box' : message }}
    </p>
  </div>
</template>

