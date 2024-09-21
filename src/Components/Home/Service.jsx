import { Link } from "react-router-dom";

const Service = ({services}) => {
  return (
    <div className="bg-green-900 ">
      <div className="rounded-t-[60px] bg-white px-12 py-4">
        <h3 className="pt-5 text-xl font-semibold">Services</h3>
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
    </div>
  );
};

export default Service;
