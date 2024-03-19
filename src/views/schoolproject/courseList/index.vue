<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchCMCData, fetchCourseListTUTE } from '@/api/tute/courseList';
import { IPopupValue, MyCMCData } from '@/api/types/course';

defineOptions({
  name: 'CourseList'
});
interface IOption {
  value: string;
  label: string;
  children?: IOption[];
}
const getCouseList = (className: string) => {
  fetchCourseListTUTE(className).then(res => {
    console.log(res);
  });
};
const cmcData = ref({} as MyCMCData);
const value = ref();
const options = ref([] as IOption[]);
const props = {
  expandTrigger: 'hover' as const
};
const selectRes = ref({} as IPopupValue);
const handleChange = (value: string[]) => {
  selectRes.value.collegeName = value[0];
  selectRes.value.majorName = value[1];
  selectRes.value.className = value[2];
  getCouseList(selectRes.value.className);
};

onMounted(() => {
  fetchCMCData('tute').then(res => {
    if (res.code == 200) {
      if (typeof res.data === 'object') {
        const data = res.data as MyCMCData;
        // key是学院名
        for (const collegeKey in data) {
          // innerObj 是专业对象，内嵌班级列表
          const majorObj = data[collegeKey];
          const collegeOption = {
            value: collegeKey,
            label: collegeKey
          } as IOption;
          const majorList = [] as IOption[];
          for (const majorKey in majorObj) {
            const majorOption = {
              value: majorKey,
              label: majorKey
            } as IOption;
            const optionClassList = [] as IOption[];
            const classList = majorObj[majorKey];
            classList.forEach(item => {
              const option = {
                value: item,
                label: item
              } as IOption;
              optionClassList.push(option);
            });
            majorOption.children = optionClassList;
            majorList.push(majorOption);
          }
          collegeOption.children = majorList;
          options.value.push(collegeOption);
        }
      }
      cmcData.value = res.data;
    }
  });
});
</script>

<template>
  <div>
    <div class="m-4">
      <p>选择班级</p>
      <el-cascader
        v-model="value"
        :options="options"
        :props="props"
        @change="handleChange"
      />
      {{ selectRes }}
    </div>
  </div>
</template>
