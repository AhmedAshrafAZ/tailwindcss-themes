<script setup lang="ts">
import Color from '@/types/Color';
import { storeToRefs } from 'pinia';
import AshButton from '@/components/AshButton.vue';
import { useThemesStore } from '@/store/themesStore';
const { getAllThemes, setTheme } = useThemesStore();
const { currentTheme } = storeToRefs(useThemesStore());
onMounted(() => {
    setTheme(getAllThemes[0]);
});
</script>


<template >
    <div class="bg-base-100 w-1/6 h-full rounded-lg border-2 p-4 overflow-y-scroll flex flex-col">
        <button
            :class="`${currentTheme === theme ? 'bg-primary text-primary-content' : 'bg-base-100 text-base-content'} p-2 m-2 rounded-xl`"
            @click="setTheme(theme)" v-for="theme in getAllThemes">{{ theme }}</button>
    </div>
</template>