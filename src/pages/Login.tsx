import React from "react";
import SignInLayout from "@/Layouts/SigninLayout";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <SignInLayout>
      <form className="fex flex-col items-center space-y-6 mx-auto">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">
          <span className="text-white me-3 bg-primary font-bold">
            Welcome to Omni!
          </span>
          Let's Sign in Your Profile
        </h1>
        <div className="flex flex-col item-center w-7/12 mx-auto">
          <label htmlFor="email" className="text-sm text-secondary mb-1">
            Email
          </label>
          <Input type="email" placeholder="Email Address" name="email" />
          <label
            htmlFor="password"
            className="text-sm mt-5 mb-1 text-secondary "
          >
            Password
          </label>
          <Input type="password" placeholder="Password" name="password" />

          <Button
            variant="link"
            onClick={() => navigate("/forgotPassword")}
            className="text-sm mt-2 self-start pl-0"
          >
            Forgot Password?
          </Button>

          <Button variant="secondary" className="text-white w-full mt-10">
            Sign in
          </Button>
          <p className="text-sm my-3 text-gray-600 text-center">
            Don't have an account?{" "}
            <Button
              variant="link"
              onClick={() => navigate("/signup/step1")}
              className="text-primary"
            >
              Sign up
            </Button>
          </p>
        </div>
      </form>
    </SignInLayout>
  );
};

export default Login
