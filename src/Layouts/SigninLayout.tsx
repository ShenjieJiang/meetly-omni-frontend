import React, { ReactNode } from "react";
import magnifier from "@/assets/icons/magnifier.png";
import star from "@/assets/icons/star.png";
import dashboard from "@/assets/images/dashboard.png";


const SignInLayout: React.FC<{children:ReactNode}> = ({children}) =>{
    return(
    <>
       <div className="flex justify-center">
        <img
        src={dashboard}
        alt="Dashboard Image"/>
       </div>
       <img src={magnifier} 
       alt="Magnifier Icon" 
       className="absolute left-[357px] top-[371px] w-[84px] h-[84px]"/>
       <img src={star} 
       alt="Star Icon" 
       className="absolute right-[372px] bottom-[230px] w-[72px] h-[72px]"/>
      {children}    
    </>  
   
    )
}

export default SignInLayout;