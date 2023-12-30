/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import Layout from "./Layout";
import AdminLayout from "./AdminLayout";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CreateBlogPage from "./Pages/CreateBlogPage";
import CyberAttacksPage from "./Pages/CyberAttacksPage";
import BlogsPage from "./Pages/Blogs";
import PostPage from "./Pages/PostPage";
import ModifyAttacksPage from "./Pages/ModifyAttacksPage";
import ModifyBlogsPage from "./Pages/ModifyBlogsPage";
import EditPostPage from "./Pages/EditPostPage";
import CyberAttackQuizPage from "./Pages/CyberAttackQuizPage";
import CyberAttackQuizResultPage from "./Pages/CyberAttackQuizResultPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/create" element={<CreateBlogPage />}></Route>
            <Route path="/cyber-attacks" element={<CyberAttacksPage />}></Route>
            <Route
              path="/cyber-attacks/:id/quiz"
              element={<CyberAttackQuizPage />}
            ></Route>
            <Route
              path="/cyber-attacks/:id/quiz/result"
              element={<CyberAttackQuizResultPage />}
            ></Route>
            <Route path="/blogs" element={<BlogsPage />}></Route>
            <Route path="/post/:id" element={<PostPage />}></Route>
            <Route path="/edit/:id" element={<EditPostPage />}></Route>
          </Route>

          <Route path="/admin/" element={<AdminLayout />}>
            <Route index element={<ModifyBlogsPage />}></Route>
            <Route
              path="modify-attacks"
              element={<ModifyAttacksPage />}
            ></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
