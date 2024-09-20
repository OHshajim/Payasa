import { BiArrowBack } from "react-icons/bi";

const ServiceNav = ({ service }) => {
  return (
    <div className="navbar  bg-green-900 select-none text-white">
      <Link to={"/"}>
        <button className="btn btn-ghost text-2xl rounded-full">
          <BiArrowBack />
        </button>
      </Link>
      <h4 className="font-semibold text-lg">{service}</h4>
    </div>
  );
};

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
ServiceNav.propTypes = {
  service: PropTypes.string.isRequired,
};

export default ServiceNav;
