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
          <h6 className="text-white footer-title ">Services</h6>
          <a className="link link-hover text-gray-300">Send Money</a>
          <a className="link link-hover text-gray-300">Cash Out</a>
          <a className="link link-hover text-gray-300">Cash In</a>
          <a className="link link-hover text-gray-300">Banking</a>
        </nav>
        <nav className=" mx-auto">
          <h6 className="text-white footer-title ">Company</h6>
          <a className="link link-hover text-gray-300">About us</a>
          <a className="link link-hover text-gray-300">Contact</a>
          <a className="link link-hover text-gray-300">Statement</a>
          <a className="link link-hover text-gray-300">Loan</a>
        </nav>
        <nav className=" mx-auto">
          <h6 className="text-white footer-title ">Legal</h6>
          <a className="link link-hover text-gray-300">Terms of use</a>
          <a className="link link-hover text-gray-300">Privacy policy</a>
          <a className="link link-hover text-gray-300">Cookie policy</a>
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
