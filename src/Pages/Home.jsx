import Balance from "../Components/Home/Balance";
import Nav from "../Components/Home/Nav";

const Home = () => {
  return (
    <div className="relative select-none">
      <div className="z-50 px-10">
        <Nav />
        <Balance/>
      </div>
      <div className="absolute bg-green-900 w-screen h-[20vh] top-0 -z-50 banner"></div>
    </div>
  );
};

export default Home;
