import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/Post/:issueNumber" element={<Post />} />
      </Route>
    </Routes>
  );
}
