import React from 'react';

const PrimaryButton = ({ onClick, children, width = 'auto' }) => {
  return (
    <div style={{ width }}>
      <button 
        className="bg-[#85C6FF] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#70b0e0] transition-colors duration-200 mt-7 w-full"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
