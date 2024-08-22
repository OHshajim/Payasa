import { useState } from "react";
import ServiceNav from "../Shared/ServiceNav";
import TransferNumberValidate from "../Components/MoneyTransfer/TransferNumberValidate";

const AddMoney = () => {
    const [isValid, setValid] = useState(false);
    const [number, setNumber] = useState(null);
  return (
    <div className="select-none">
      <ServiceNav service="Add Money"/>
      {isValid || (
        <TransferNumberValidate setValid={setValid} setNumber={setNumber} />
      )}
    </div>
  );
};

export default AddMoney;
