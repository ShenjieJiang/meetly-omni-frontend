import "@/App.css"
import { BrowserRouter, Routes, Route } from "react-router"
import About from "@/pages/About.tsx"
import Login from "@/pages/Login.tsx"
import Register from "@/pages/Register.tsx"
import AuthLayout from "@/Layouts/AuthLayout"
import HomePage from "@/pages/HomePage"
import Step1 from "@/components/Step1"
import Step2 from "@/components/Step2"
import Step3 from "@/components/Step3"
import Step4 from "@/components/Step4"
import Success from "@/components/Success"
import SignupLayout from "./Layouts/SignupLayout"

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

        <Route path="signup" element={<SignupLayout />}>
          <Route index path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
