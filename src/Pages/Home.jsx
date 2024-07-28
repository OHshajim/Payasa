import Balance from "../Components/Home/Balance";
import Nav from "../Components/Home/Nav";
import Service from "../Components/Home/Service";

const Home = () => {
  return (
    <div className="relative select-none">
      <div className="z-50 ">
        <div className="px-10">
          <Nav />
          <Balance />
        </div>
        <Service />
      </div>
      
      <div className="absolute bg-green-900 w-screen h-[24vh] top-0 -z-50 banner"></div>
    </div>
  );
};

export default Home;
