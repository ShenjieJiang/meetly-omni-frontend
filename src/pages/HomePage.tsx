import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="text-text-lightGrey flex justify-center items-center w-screen h-screen  gap-2 ">
        This is a Vite + React app!
        <Button
          className="bg-primary text-white"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          className="bg-secondary text-white"
          onClick={() => navigate("/signup/step1")}
        >
          Signup
        </Button>
      </div>
    </>
  );
};

export default HomePage;
