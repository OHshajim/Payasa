import { BiArrowBack } from "react-icons/bi";

const ServiceNav = ({ service }) => {
  return (
    <div className="navbar  bg-green-950 select-none">
      <button className="btn btn-ghost text-2xl rounded-full ">
        <BiArrowBack />
      </button>
      <h4 className="font-semibold text-lg">{service}</h4>
    </div>
  );
};

import PropTypes from "prop-types";
ServiceNav.propTypes = {
  service: PropTypes.string.isRequired,
};

export default ServiceNav;
