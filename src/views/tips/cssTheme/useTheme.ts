import { ref, watchEffect } from 'vue';
const key = '__theme__';
const theme = ref(localStorage.getItem(key) || 'light');

watchEffect(() => {
  // 可以设置根元素的主题
  document.documentElement.dataset.theme = theme.value;
  localStorage.setItem(key, theme.value);
});
export const useTheme = () => {
  return {
    theme,
    toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    }
  };
};
