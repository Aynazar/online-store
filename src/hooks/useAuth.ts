import { useTypedSelector } from "@/hooks/useTypedSelector.ts";
import { LoadingStatus } from "@/store/ducks/types.ts";

export const useAuth = () => {
  const loadingStatus = useTypedSelector((state) => state.user?.status);
  const isReady =
    loadingStatus !== LoadingStatus.NEVER &&
    loadingStatus !== LoadingStatus.LOADING;
  return {
    isAuth: useTypedSelector(
      (state) => state.user?.status === LoadingStatus.LOADED,
    ),
    isReady,
    user: useTypedSelector((state) => state.user?.data),
  };
};
