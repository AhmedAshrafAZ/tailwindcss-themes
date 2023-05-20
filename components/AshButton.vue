<script setup lang="ts">
import { useThemesStore } from '@/store/themesStore';

import Color from '@/types/Color';
defineProps(
  {
    color: {
      type: String as PropType<Color>,
      required: true,
    },
  }
)

const { setColor } = useThemesStore();
const capitalizeColor = (color: string) => {
  return color.charAt(0).toUpperCase() + color.slice(1);
}

</script>


<template>
  <button @click="setColor(color)"
    :class="`hover:bg-${color}-focus bg-${color} text-${color}-content py-3 px-6 rounded-md`">
    {{ capitalizeColor(color) }}
  </button>
</template>

