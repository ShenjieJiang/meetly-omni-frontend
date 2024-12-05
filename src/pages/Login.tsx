import React from "react";
import SignInLayout from "@/Layouts/SigninLayout";
import { Button } from "@/components/ui/button";


const Login: React.FC = () => {
  return (
    <SignInLayout>
     <form className ="fex flex-col items-center space-y-6 mx-auto">
      <h1 className ="text-4xl font-bold text-center text-secondary mb-12">
      <span className="text-white me-3 bg-primary font-bold">Welcome to Omni!</span>    
      Let's Sign in Your Profile
      </h1>
      <div className="flex flex-col item-center w-7/12 mx-auto">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email Address" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password"/>
        <a href="/forgot-password"
        className="text-sm text-primary mt-2">Forgot Password?</a>
         <Button variant="secondary" className="text-white w-full mt-10">Sign in</Button>
         <p className="text-sm mt-3 text-secondary text-center">Don't have an account? <span className="text-primary">Sign up</span></p>
      </div>
     </form>
    </SignInLayout>
  );
};

export default Login
