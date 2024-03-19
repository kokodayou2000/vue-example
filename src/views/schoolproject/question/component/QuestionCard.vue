<script setup lang="ts">
import { IKeyValue, IQuestion } from '@/api/types/question';
import {
  isOptionType,
  TypeMap
} from '@/views/schoolproject/question/utils/utils';
defineOptions({
  name: 'QuestionCard'
});
interface IProps {
  item: IQuestion;
  showDetail: boolean;
}
interface IEmits {
  (e: 'delete', item: IQuestion): void;
  (e: 'pass', item: IQuestion): void;
}

const props = defineProps<IProps>();
// 会失去响应式
// eslint-disable-next-line vue/no-setup-props-destructure
let { item } = props;
item = item as IQuestion;
const emits = defineEmits<IEmits>();
</script>

<template>
  <el-card style="max-width: 380px">
    <template #header>
      <div
        :style="{
          background: isOptionType(item.qtype) ? '#e1df9d' : '#71adec'
        }"
      >
        {{ TypeMap.get(item.qtype) + ' -- ' + item.question }}
      </div>
    </template>
    <div>
      {{ 'id: ' + item.id }}
    </div>
    <div>
      {{ '题库名称: ' + item.bankName }}
    </div>
    <div>
      {{ '题库id: ' + item.bankId }}
    </div>
    <div>
      {{ '媒体资源: ' + item.mediaResources }}
    </div>
    <div>
      {{ '答案: ' + item.answer }}
    </div>
    <div>
      {{ '创建时间: ' + item.createdAt }}
    </div>
    <div>
      {{ '创建者: ' + item.createdBy }}
    </div>
    <div>
      {{ '创建者姓名: ' + item.createdUserName }}
    </div>
    <div v-show="props.showDetail">
      <div>
        {{ '章节: ' + item.chapter }}
      </div>
      <div>
        {{ '笔记: ' + item.note }}
      </div>
      <div>
        {{ '状态: ' + item.status }}
      </div>
      <div>
        {{ '更新时间: ' + item.updatedAt }}
      </div>
      <div>
        {{ '是否被收藏: ' + item.isCollect }}
      </div>
      <div>
        {{ '选择的选项: ' + item.selected }}
      </div>
    </div>
    <div v-if="isOptionType(item.qtype)">
      <div :key="opt.key" v-for="opt in item.options as IKeyValue[]">
        <div>{{ opt.key + ' : ' + opt.value }}</div>
      </div>
    </div>
    <div v-else>
      {{ item.options }}
    </div>
    <div>正确答案{{ item.answer }}</div>
    <div class="float-right">
      <el-button type="danger" @click="emits('delete', item)">删除</el-button>
      <el-button type="success" @click="emits('pass', item)">通过</el-button>
    </div>
  </el-card>
</template>
