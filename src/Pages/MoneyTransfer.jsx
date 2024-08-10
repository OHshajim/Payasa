import { useState } from "react";
import ServiceNav from "../Shared/ServiceNav";
import TransferNumberValidate from "../Components/MoneyTransfer/TransferNumberValidate";
import MoneyTransferForm from "../Components/MoneyTransfer/MoneyTransferForm";
import { useLocation } from "react-router-dom";

const MoneyTransfer = () => {
  const [isValid, setValid] = useState(false);
  const [number, setNumber] = useState(null);
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="select-none">
      <ServiceNav
        service={
          pathname === "/sendMoney"
            ? "Send Money"
            : pathname === "/cashOut"
            ? "Cash Out"
            : null
        }
      />
      {isValid || (
        <TransferNumberValidate setValid={setValid} setNumber={setNumber} />
      )}
      {isValid && <MoneyTransferForm number={number} />}
    </div>
  );
};

export default MoneyTransfer;
