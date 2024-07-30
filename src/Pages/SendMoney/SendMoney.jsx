import { useState } from "react";
import SendNumber from "../../Components/SendMoney/SendNumber";
import ServiceNav from "../../Shared/ServiceNav";

const SendMoney = () => {
  const [isValid, setValid] = useState(false);
  return (
    <div className="select-none">
      <ServiceNav service="Send Money" />
      {isValid || <SendNumber setValid={setValid}/>}
    </div>
  );
};

export default SendMoney;
