import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex mt-[70px] ml-[160px] mb-[16px]">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="App Logo"
        className="w-[105px] h-[30px] object-contain"
      />
    </header>
  );
};

export default Header;

