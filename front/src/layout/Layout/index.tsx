import React, { FC } from "react";

const Layout:FC = ({children}) => {
  return (
    <>
    <header className="text-gray-100  bg-green-500 text-center p-5 align-middle font-extrabold">
      Simple board
    </header>
    {children}
    <div className = "fixed bottom-0  bg-green-500 h-12 w-full"></div>
    </>
  );
};

export default Layout;
