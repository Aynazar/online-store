import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import MainPage from "./pages/Main";
function App() {
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
