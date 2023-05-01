import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout/SharedLayot";

const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
