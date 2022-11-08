import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Index";
import NewPost from "./component/NewPost";
import Post from "./component/Post";
import PostItems from "./component/PostItems";
import Users from "./component/Users";
import Welcome from "./component/Welcome";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home><Welcome /></Home>} exact />
          <Route path="users" element={<Home><Users /></Home>} exact />
          <Route path="users/:userId" element={<Home><PostItems /></Home>} exact />
          <Route path="users/:userId/posts/newPost" element={<Home><NewPost /></Home>} exact />
          <Route path="users/:userId/posts/:postId" element={<Home><Post /></Home>} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
