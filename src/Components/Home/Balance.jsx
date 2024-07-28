import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const Balance = () => {
  const [text, setText] = useState("Tap for Balance");
  const showCurrentBalance = () => {
    setText("5000");
    setTimeout(()=>setText("Tap for Balance"),2000);
  };
  return (
    <div>
      <button
        onClick={showCurrentBalance}
        className="btn rounded-full "
      >
        <TbCurrencyTaka className="text-2xl " />
        {text}
      </button>
    </div>
  );
};

export default Balance;
