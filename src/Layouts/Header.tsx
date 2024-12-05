import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex mt-16 ml-32 mb-4">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="App Logo"
        className="w-24 h-8 object-contain"
      />
    </header>
  );
};

export default Header;

