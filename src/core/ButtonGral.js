import React from "react";

export const ButtonGral = ({ txt, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="btn-orange">
        {txt}
      </button>
    </>
  );
};

export default ButtonGral;
