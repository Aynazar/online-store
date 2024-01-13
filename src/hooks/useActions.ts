import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { rootActions } from "@/store/rootActions.ts";
import { useDispatch } from "react-redux";

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
