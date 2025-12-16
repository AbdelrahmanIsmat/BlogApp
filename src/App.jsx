import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SinglePostPage from "./pages/SinglePostPage";
import BlogListingPage from "./pages/BlogListingPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlogListingPage />} />
          <Route path="blog/:id" element={<SinglePostPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
