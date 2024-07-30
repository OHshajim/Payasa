import { AuthenticateBtn } from "../../Pages/Register";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

const SendNumber = ({setValid}) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const User = data;
    console.log(User);
    // await fetch(`${import.meta.env.VITE_URL}/authentication/login`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(User),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    setValid(false)
  };

  return (
    <section className="container mx-auto">
      <div className=" max-w-screen-sm mx-auto my-20 bg-green-900 p-10 ">
        <form className="w-full lg:max-w-xl" onSubmit={handleSubmit(onSubmit)}>
          {/* Number */}
          <label>Recipient Number or A/C No </label>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <FaPhoneAlt className="text-xl ml-3" />
            </span>
            <input
              type="number"
              className="block w-full py-3 border rounded-lg px-11 bg-black text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Phone Number"
              {...register("number", {
                required: true,
                minLength: 10,
                maxLength: 14,
              })}
            />
          </div>
          {(errors.number?.type == "required" && (
            <span className="text-red-600 font-semibold text-sm mt-1">
              Phone number is required ***
            </span>
          )) ||
            (errors.number?.type == "maxLength" && (
              <span className="text-red-600 font-semibold text-sm mt-1">
                Phone number length must be in 14 ***
              </span>
            )) ||
            (errors.number?.type == "minLength" && (
              <span className="text-red-600 font-semibold text-sm mt-1">
                Phone number length must be equal or more than 10 ***
              </span>
            ))}

          {AuthenticateBtn("Next ")}
        </form>
      </div>
    </section>
  );
};

import PropTypes from "prop-types";
SendNumber.propTypes = {
    setValid: PropTypes.bool.isRequired,
};

export default SendNumber;
