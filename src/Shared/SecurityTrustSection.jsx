import { FaLock, FaShieldAlt, FaKey, FaCheckCircle } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const SecurityTrustSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        <SectionTitle
          heading={"Your Security is Our Priority"}
          subHeading={"Security & Trust"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Encryption */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50">
            <FaLock
              size={40}
              className="text-blue-600 mb-4 hover:text-blue-800"
            />
            <h3 className="font-semibold text-xl mb-2">
              End-to-End Encryption
            </h3>
            <p className="text-gray-500 text-center">
              All data transfers are encrypted, safeguarding your personal and
              banking information.
            </p>
          </div>

          {/* Fraud Protection */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-50">
            <FaShieldAlt
              size={40}
              className="text-green-600 mb-4 hover:text-green-800"
            />
            <h3 className="font-semibold text-xl mb-2">Fraud Protection</h3>
            <p className="text-gray-500 text-center">
              Advanced algorithms detect and prevent unauthorized transactions,
              keeping your funds safe.
            </p>
          </div>

          {/* Secure Logins */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-purple-50">
            <FaKey
              size={40}
              className="text-purple-600 mb-4 hover:text-purple-800"
            />
            <h3 className="font-semibold text-xl mb-2">Secure Logins (JWT)</h3>
            <p className="text-gray-500 text-center">
            Implement JSON Web Tokens for secure authentication and enhanced account protection.
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-50">
            <FaCheckCircle
              size={40}
              className="text-red-600 mb-4 hover:text-red-800"
            />
            <h3 className="font-semibold text-xl mb-2">
              Regulatory Compliance
            </h3>
            <p className="text-gray-500 text-center">
              We adhere to global financial regulations, ensuring a compliant
              banking experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrustSection;
