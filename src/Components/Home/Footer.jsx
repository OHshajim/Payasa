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
          <h6 className="footer-title text-gray-200">Services</h6>
          <a className="link link-hover text-gray-400">Send Money</a>
          <a className="link link-hover text-gray-400">Cash Out</a>
          <a className="link link-hover text-gray-400">Cash In</a>
          <a className="link link-hover text-gray-400">Banking</a>
        </nav>
        <nav className=" mx-auto">
          <h6 className="footer-title text-gray-200">Company</h6>
          <a className="link link-hover text-gray-400">About us</a>
          <a className="link link-hover text-gray-400">Contact</a>
          <a className="link link-hover text-gray-400">Statement</a>
          <a className="link link-hover text-gray-400">Loan</a>
        </nav>
        <nav className=" mx-auto">
          <h6 className="footer-title text-gray-200">Legal</h6>
          <a className="link link-hover text-gray-400">Terms of use</a>
          <a className="link link-hover text-gray-400">Privacy policy</a>
          <a className="link link-hover text-gray-400">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-black py-2 text-gray-300">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="text-green-500 font-semibold ">Payasa</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
