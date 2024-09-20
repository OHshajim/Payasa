import Balance from "../Components/Home/Balance";
import Footer from "../Components/Home/Footer";
import Nav from "../Components/Home/Nav";
import Service from "../Components/Home/Service";
import Banner from "../Shared/Banner";

const Home = () => {
  return (
    <div className="relative ">
      <div className="z-50">
        <div className="bg-green-900 pb-10 md:px-10 px-5 ">
          <Nav />
          <Balance />
        </div>
        <Service />
        <Banner/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
