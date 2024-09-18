import { Link } from "react-router-dom";

const AgentService = () => {
    const services = [
        {
          service: "Cash Out Report",
          icon: "/cashout.png",
          route: "/cashOut",
        },
        {
          service: "Cash In Request",
          icon: "/addmoney.png",
          route: "AddMoneyRequest",
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

export default AgentService;