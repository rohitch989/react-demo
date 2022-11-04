import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Index";
import Users from "./component/Users";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="users" element={<Users />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
