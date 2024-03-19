export interface IHeadList {
  index: number;
  message: string;
}
interface MyCMCData {
  [key: string]: {
    [key: string]: string[];
  };
}

export interface IPicker {
  majorName: string;
  classNames: [];
}
export interface IOutPicker {
  collegeName: string;
  lists: IPicker[];
}

export interface ICourseItem {
  // 分为 task, '' 和 课程名
  courseName: string;
  courseNum: number;
  // 如果是task就 任务详情
  zxjxjhh: string;
  // 如果是task就记录了周次
  bm: string | null;
  // 如果是task就记录了状态 done or undone
  college: string;
  // 上课周次
  skzc: string;
  courseId: string;
  major: string;
  skxq: number; // 上课星期
  skjc: number; // 上课节次
  cxjc: number | null;
  jsh: string | null;
  kch: string | null;
  xf: string | null;
  jxlh: string | null;
  jxlm: string | null;
  jash: string | null;
  jasm: string | null;
  kslxmc: string | null;
  kkxsm: string | null;
  kcm: string | null;
  jsm: string | null;
  xss: number | null;
  bjh: string | null;

  zcsm: string | null;
}

// 查询空闲教室的参数
export interface getEmptyBuilder {
  build_name: string;
  days: string;
  weeks: string;
  sections: [];
}

export interface IEmptyBuilder {
  id: number;
  planCode: string;
  campusCode: string;
  teachingBuildingCode: string;
  classroomCode: string;
  campusName: string;
  teachingBuildingName: string;
  classroomName: string;
  seats: number;
  typeDirect: string;
}

export interface CourseInfoItem {
  college: string;
  major: string;
  kcm: string;
  kch: string;
  xf: string;
  kslxmc: string;
  semester: string;
  course_name: string;
  range: number;
}

export interface IColor {
  className: string;
  colorIs: string;
}

export interface IPopup {
  text: string;
  value: string;
  children?: IPopup[];
}

export interface IPopupValue {
  collegeName: string;
  majorName: string;
  className: string;
}
