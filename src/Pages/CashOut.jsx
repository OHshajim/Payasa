import ServiceNav from "../Shared/ServiceNav";
import SendNumberValidate from "../Components/SendMoney/TransferNumberValidate";
import SendMoneyForm from "../Components/SendMoney/SendMoneyForm";
import { useState } from "react";

const CashOut = () => {
  const [isValid, setValid] = useState(false);
  const [number, setNumber] = useState(null);
  return (
    <div className="select-none">
      <ServiceNav service="Cash Out" />
      {isValid || (
        <SendNumberValidate setValid={setValid} setNumber={setNumber} />
      )}
      {isValid && <SendMoneyForm number={number} />}
    </div>
  );
};

export default CashOut;
