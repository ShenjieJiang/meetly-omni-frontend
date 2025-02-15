import React, { ReactNode } from "react";
import magnifier from "@/assets/icons/magnifier.webp";
import star from "@/assets/icons/star.webp";
import dialog from "@/assets/icons/dialog.webp";
import dashboard from "@/assets/images/dashboard.webp";
import profile_mark from "@/assets/icons/profile_mark.webp";
import profile_rachel from "@/assets/icons/profile_rachel.webp";

const SignInLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="relative mx-32">
        <div className="flex justify-center">
          <img src={dashboard} alt="Dashboard Image" className="w-1/4" />
        </div>
        <img
          src={magnifier}
          alt="Magnifier Icon"
          className="absolute left-32 -bottom-5 w-20 h-20"
        />
        <img
          src={profile_rachel}
          alt="Rachel Profile"
          className="absolute right-32 bottom-14 h-32 drop-shadow-lg"
        />
      </div>
      <div className="relative mx-32 mt-10">
        <div className="flex justify-center">{children}</div>
        <img
          src={dialog}
          alt="Dialog Icon"
          className="absolute right-32 top-0 w-44 h-20"
        />
        <img
          src={star}
          alt="Star Icon"
          className="absolute right-64 bottom-5 w-20 h-20"
        />
        <img
          src={profile_mark}
          alt="Mark Profile"
          className="absolute left-32 bottom-5 h-32 drop-shadow-lg"
        />
      </div>
    </>
  );
};

export default SignInLayout;
