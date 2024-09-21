import { BiMailSend } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-zinc-900 p-10">
        <aside className=" m-auto">
          <div className="w-32">
            <img alt="Logo" src={"/Logo(1).png"} />
          </div>
        </aside>
        <nav className=" mx-auto">
          <h6 className="text-white opacity-100 footer-title ">Services</h6>
          <Link to={"/sendMoney"} className="link link-hover text-gray-300">Send Money</Link>
          <Link to={"/cashOut"} className="link link-hover text-gray-300">Cash Out</Link>
          <Link to={"/addMoney"} className="link link-hover text-gray-300">Add Money</Link>
          <Link className="link link-hover text-gray-300">Banking</Link>
        </nav>
        <nav className=" mx-auto">
          <h6 className="text-white opacity-100 footer-title ">Company</h6>
          <a className="link link-hover text-gray-300">About us</a>
          <a className="link link-hover text-gray-300">Contact</a>
          <a className="link link-hover text-gray-300">Statement</a>
          <a className="link link-hover text-gray-300">Loan</a>
        </nav>
        <nav className=" mx-auto">
          <h6 className="text-white opacity-100 footer-title ">Contact us</h6>
          <a className="link link-hover text-gray-300 flex items-center gap-2"><IoCall className="text-xl"/> +880 1741942510</a>
          <a className="link link-hover text-gray-300 flex items-center gap-2"><BiMailSend className="text-2xl"/> ajshajimmax@gmail.com</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-black py-2 text-gray-300">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="text-green-500 font-semibold ">PAYASA</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
