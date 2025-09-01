import React from "react";
interface ButtonProps {
  text: string; 
}
const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <div>
      <button className="w-full p-[8px] text-[14px] font-[600] font-sans bg-[#0058ff] text-white hover:bg-white hover:text-[#0058ff] transition-colors rounded-[99px] cursor-pointer border border-[#0058ff]">
       {text}
      </button>
    </div>
  );
};

export default Button;
