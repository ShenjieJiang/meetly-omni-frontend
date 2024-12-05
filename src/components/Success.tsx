import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Email sent successfully.</div>
      <div>Success page: Please check email verification!</div>
      <Button className="text-white" onClick={() => navigate("/")}>
        <ArrowLeft /> Back to Home Page
      </Button>
    </>
  );
};

export default Success;
