import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { setProjectDetail } from "./reducers/projectDetailSlice";
import { setProjectList } from "./reducers/projectListSlice";
import useProjectService from "./useProjectService";

const useProjectViewModel = () => {
  const { fetchProjectsList, fetchProjectDetail } = useProjectService();
  const dispatch = useAppDispatch();

  const getProjectsList = () => {
    const data = fetchProjectsList();
    dispatch(setProjectList(data));
  };

  const getProjectDetail = (id: number = 1) => {
    const data = fetchProjectDetail(id);
    dispatch(setProjectDetail(data));
  };

  return {
    getProjectsList,
    getProjectDetail,
  };
};

export default useProjectViewModel;
