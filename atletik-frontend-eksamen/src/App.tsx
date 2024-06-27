import { Route, Routes } from "react-router";
import Layout from "./navigation/Layout";
import Athletes from "./components/Athletes";
import Clubs from "./components/Clubs";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Athletes />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
