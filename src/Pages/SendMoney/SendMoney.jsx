import { useState } from "react";
import ServiceNav from "../../Shared/ServiceNav";
import SendNumberValidate from "../../Components/SendMoney/SendNumberValidate";
import SendMoneyForm from "../../Components/SendMoney/SendMoneyForm";

const SendMoney = () => {
  const [isValid, setValid] = useState(false);
  const [number, setNumber] = useState(null);
  return (
    <div className="select-none">
      <ServiceNav service="Send Money" />
      {isValid || <SendNumberValidate setValid={setValid} setNumber={setNumber} />}
      {isValid && <SendMoneyForm number={number}/>}
    </div>
  );
};

export default SendMoney;
