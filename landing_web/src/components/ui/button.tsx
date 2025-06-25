import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`flex text-center bg-primer-300 text-white px-12 h-11 rounded-full text-sm items-center justify-center font-semibold hover:bg-blue-500 cursor-pointer transition duration-300 shadow-xl shadow-primer-200/30 ${
        className || " "
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
