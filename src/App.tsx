import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import MainPage from "./pages/Main";
import useActions from "@/hooks/useActions.ts";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store.ts";
import { useAuth } from "@/hooks/useAuth.ts";
import Loading from "@/components/ui/Loading.tsx";
function App() {
  const { isReady } = useAuth();
  const dispatch = useAppDispatch();
  const { checkAuth } = useActions();

  useEffect(() => {
    dispatch(checkAuth);
  }, [dispatch]);

  if (!isReady) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
