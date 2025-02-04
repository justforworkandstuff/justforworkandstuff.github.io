import { useAppDispatch } from "shared/hooks/useAppDispatch";
import useUserService from "./useUserService"
import { setUserData } from "./reducers/userDataSlice";

const useAboutViewModel = () => {
    const { fetchUserData } = useUserService();
    const dispatch = useAppDispatch();

    const getUserData = () => {
        const data = fetchUserData();
        dispatch(setUserData(data));
    }

    return {
        getUserData,
    }
}

export default useAboutViewModel;