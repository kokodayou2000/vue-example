import { useGet } from './base';

export const fetchCMCData = (schoolName: string) => {
  return useGet(
    '/back/api/v1/CMCList/getCollegeMajorClassListBySchool/' + schoolName
  );
};

export const fetchCMCDataInstance = (schoolName: string) => {
  return useGet(
    '/back/api/v1/CMCList/getCollegeMajorClassListBySchool/' + schoolName
  );
};

export const fetchCourseListData = (schoolName: string, className: string) => {
  return useGet(
    `/back/api/v1/course/getCourseListBySchool/${schoolName}/${className}`
  );
};

export const fetchCourseListTUTE = (className: string) => {
  return useGet(`/back/api/v1/course/getCourseList/${className}`);
};
