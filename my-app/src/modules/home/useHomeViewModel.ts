import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { setUserData } from "../../shared/reducers/userDataSlice";
import useUserService from "./useUserService";

const useHomeViewModel = () => {
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

export default useHomeViewModel;