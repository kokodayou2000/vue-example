<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue';
import {
  fakeDeleteQuestion,
  fakeDeleteQuestionList,
  passQuestion,
  uploadQuestionList
} from '@/api/tute/question';
import { onMounted, reactive, ref } from 'vue';
import { IQuestion } from '@/api/types/question';
import QuestionCard from '@/views/schoolproject/question/component/QuestionCard.vue';
import { ElMessage } from 'element-plus';
defineOptions({
  name: 'Question'
});
const currentQuestionList = ref([] as IQuestion[]);
const getUnPassStatusQuestionList = () => {
  uploadQuestionList().then(res => {
    if (res.code === 200) {
      if (res.data) {
        currentQuestionList.value = res.data as IQuestion[];
      }
    }
  });
};
const getFakeDeleteQuestionList = () => {
  fakeDeleteQuestionList().then(res => {
    if (res.code === 200) {
      if (res.data) {
        currentQuestionList.value = res.data as IQuestion[];
      }
    }
  });
};
const dialogState = reactive({
  show: false,
  title: '',
  content: {} as IQuestion,
  exec: () => {}
});
type msgType = 'success' | 'warning' | 'error' | 'info';
const openMessage = (message: string, type: msgType) => {
  ElMessage({
    message,
    type
  });
};
const execDel = () => {
  fakeDeleteQuestion(dialogState.content.id).then(res => {
    dialogState.show = false;
    if (res.code === 200) {
      openMessage('删除成功', 'success');
    } else {
      openMessage('删除失败', 'error');
    }
  });
};
const execPass = () => {
  passQuestion(dialogState.content.id).then(res => {
    dialogState.show = false;
    if (res.code === 200) {
      openMessage('通过成功', 'success');
    } else {
      openMessage('通过失败', 'error');
    }
  });
};
const del = (question: IQuestion) => {
  dialogState.exec = execDel;
  dialogState.content = question;
  dialogState.title = '确定删除吗？';
  dialogState.show = true;
};
const pass = (question: IQuestion) => {
  dialogState.exec = execPass;
  dialogState.content = question;
  dialogState.title = '确定通过吗？';
  dialogState.show = true;
};
const showDetail = ref(false);
onMounted(() => {
  getUnPassStatusQuestionList();
});
</script>

<template>
  <div>
    <el-dialog
      v-model="dialogState.show"
      :title="dialogState.title"
      width="500"
    >
      <div>{{ dialogState.content.question }}</div>
      <div>{{ dialogState.content.answer }}</div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogState.show = false">取消</el-button>
          <el-button type="primary" @click="dialogState.exec">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <header>
      <el-dropdown>
        <span class="el-dropdown-link">
          类型
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="getUnPassStatusQuestionList"
              >未审核题目</el-dropdown-item
            >
            <el-dropdown-item @click="getFakeDeleteQuestionList"
              >伪删除的题目</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-switch
        v-model="showDetail"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      />
    </header>
    <div class="grid grid-cols-3 gap-2.5">
      <QuestionCard
        :key="item.id"
        v-for="item in currentQuestionList"
        :item="item"
        :show-detail="showDetail"
        @delete="del"
        @pass="pass"
      />
    </div>
  </div>
</template>
