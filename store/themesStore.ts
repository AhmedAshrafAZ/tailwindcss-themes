import { defineStore } from 'pinia';
import type { Theme } from '@/types/Theme'
import allThemes from '~/assets/tailwind/themes';

export const useThemesStore = defineStore({
  id: 'themesStore',
  state: () => ({
    theme: '' as keyof typeof allThemes,
  }),
  getters: {
    currentTheme(state) {
      return state.theme;
    },
    getAllThemes() {
      return Object.keys(allThemes)
    }
  },
  actions: {
    setTheme(themeName: keyof typeof allThemes) {
      this.removeThemeProperties();
      this.theme = themeName;
      this.addThemeProperties();
    },
    removeThemeProperties() {
      if (!this.theme) return;
      const props: Theme = allThemes[this.theme];
      const root = document.documentElement;
      Object.keys(props).forEach((property) => {
        root.style.removeProperty(property);
      });
    },
    addThemeProperties() {
      const props: Theme = allThemes[this.theme];
      const root = document.documentElement;
      Object.keys(props).forEach((property) => {
        root.style.setProperty(property, props[property]);
      });
    }
  },
});
