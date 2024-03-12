<script setup lang="ts">
import { ref } from 'vue';

const flag = ref(false);
</script>

<template>
  <div>
    <div class="animate-bounce mt-10">
      <el-button @click="flag = !flag">
        弹出modal
        <teleport to="body">
          <el-button
            class="fixed top-1/2 right-1/2"
            v-if="flag"
            @click="flag = !flag"
            >对话框
          </el-button>
        </teleport>
      </el-button>
    </div>
  </div>
</template>
