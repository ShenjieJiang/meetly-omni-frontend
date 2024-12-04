import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "@/pages/About.tsx";
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";
import AuthLayout from "@/Layouts/AuthLayout";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
