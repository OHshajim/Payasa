import Balance from "../../Components/Home/Balance";
import Footer from "../../Components/Home/Footer";
import Nav from "../../Components/Home/Nav";
import Service from "../../Components/Home/Service";
import Banner from "../../Shared/Banner";
import SecurityTrustSection from "../../Shared/SecurityTrustSection";
import Testimonial from "../../Shared/Testimonial";
const AgentDashBoard = () => {
  const services = [
    {
      service: "Cash Out Report",
      icon: "/cashout.png",
      route: "CashOutReport",
    },
    {
      service: "Cash In Request",
      icon: "/addmoney.png",
      route: "AddMoneyRequest",
    },
  ];
  return (
    <div className="relative ">
      <div className="z-50">
        <div className="bg-green-900 pb-10 md:px-10 px-5 ">
          <Nav />
          <Balance />
        </div>
        <Service services={services} />
        <Banner />
        <SecurityTrustSection />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default AgentDashBoard;
