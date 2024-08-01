import { useContext, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { AuthContext } from "../../Provider/AuthProvider";

const Balance = () => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("Tap for Balance");
  const showCurrentBalance = () => {
    setText(user.Balance);
    setTimeout(() => setText("Tap for Balance"), 2000);
  };
  return (
    <div>
      <button onClick={showCurrentBalance} className="btn rounded-full ">
        <TbCurrencyTaka className="text-2xl " />
        {text}
      </button>
    </div>
  );
};

export default Balance;
