<script setup lang="ts">
import DynamicCSS from '@/views/vuechanllege/cssFeatures/DynamicCSS.vue';
import GlobalCSS from '@/views/vuechanllege/cssFeatures/GlobalCSS.vue';

defineOptions({
  name: 'CssFeatures'
});
</script>

<template>
  <div>
    CssFeatures
    <div>
      <p>动态css</p>
      <DynamicCSS />
    </div>
    <div>
      <p class="g-css">全局css</p>
      <GlobalCSS />
    </div>
    <div>
      <p>如何想要混合这用全局css+动态css，好像不是很行</p>
    </div>
  </div>
</template>
