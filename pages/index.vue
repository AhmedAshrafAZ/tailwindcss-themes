<script setup lang="ts">
import Color from '@/types/Color';
import { storeToRefs } from 'pinia';
import AshButton from '@/components/AshButton.vue';
import AshInput from '@/components/AshInput.vue';
import { useThemesStore } from '@/store/themesStore';
const { getAllThemes, setTheme } = useThemesStore();
const { currentTheme } = storeToRefs(useThemesStore());
onMounted(() => {
    setTheme(getAllThemes[0] as typeof currentTheme.value);
});
</script>


<template >
    <div class="bg-base-darker w-1/6 h-full rounded-lg border-2 border-base-darkest p-4 overflow-y-scroll flex flex-col">
        <button
            :class="`${currentTheme === theme ? 'bg-primary text-primary-content' : 'bg-base-100 text-base-content'} p-2 m-2 rounded-xl`"
            @click="setTheme(theme as typeof currentTheme.value)" v-for="theme in getAllThemes">{{ theme }}</button>
    </div>
    <div class="bg-base w-5/6 h-full rounded-lg border-2 border-base-darkest p-4 overflow-hidden">
        <div class="flex flex-row gap-6 justify-between mb-4">
            <AshButton v-for="(c) in Object.keys(Color)" :color="(c as Color)" />
        </div>

        <div class="my-8 w-full">
            <AshInput />
        </div>
    </div>
</template>