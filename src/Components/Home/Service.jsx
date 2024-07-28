import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className=" bg-black my-5 rounded-t-[70px] px-10  ">
      <h3 className="pt-10 text-xl font-semibold">Services</h3>
      <div className="mt-10 flex gap-10">
        <Link to={"/sendmoney"}>
          <button>
            <img src="/sendmoney.png" alt="" className="w-12 mx-auto pb-2" />
            Send Money
          </button>
        </Link>
        <button>
          <img src="/cashout.png" alt="" className="w-12 mx-auto pb-2" />
          Cash Out
        </button>
        <button>
          <img src="/addmoney.png" alt="" className="w-10 mx-auto pb-2" />
          Add Money
        </button>
      </div>
    </div>
  );
};

export default Service;
