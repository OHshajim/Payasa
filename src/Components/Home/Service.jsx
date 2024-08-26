import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      service: "Send Money",
      icon: "/sendmoney.png",
      route: "/sendMoney",
    },
    {
      service: "Cash Out",
      icon: "/cashout.png",
      route: "/cashOut",
    },
    {
      service: "Add Money",
      icon: "/addmoney.png",
      route: "/addMoney",
    },
  ];
  return (
    <div className=" bg-black my-5 rounded-t-[70px] px-14  ">
      <h3 className="pt-14 text-xl font-semibold">Services</h3>
      <div className="mt-10 flex gap-10">
        {services.map((service) => (
          <Link to={service.route} key={service.service}>
            <button>
              <img
                src={service.icon}
                alt={service.service}
                className="w-12 mx-auto pb-2"
              />
              {service.service}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Service;
