import { Outlet } from "react-router";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-red-300 ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
