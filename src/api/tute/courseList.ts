import { useGet } from './base';

export const fetchCMCData = () => {
  return useGet('/back/api/v1/CMCList/getCollegeMajorClassListBySchool/sydx');
};

export const fetchCMCDataInstance = () => {
  return useGet('/back/api/v1/CMCList/getCollegeMajorClassListBySchool/sydx');
};

export const fetchCourseListData = (className: string) => {
  return useGet(`/back/api/v1/course/getCourseListBySchool/sydx/${className}`);
};
