import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const ServiceNav = ({ service, path }) => {
  return (
    <div className="navbar  bg-green-900 select-none text-white">
      <Link to={path || "/"}>
        <button className="btn btn-ghost text-2xl rounded-full">
          <BiArrowBack />
        </button>
      </Link>
      <h4 className="font-semibold text-lg">{service}</h4>
    </div>
  );
};

export default ServiceNav;
