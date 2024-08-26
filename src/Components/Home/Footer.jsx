const Footer = () => {
  return (
    <div>
      <footer className="footer bg-zinc-900 p-10">
        <aside className=" m-auto">
          <div className="w-28">
            <img alt="Logo" src={"/Logo(1).png"} />
          </div>
        </aside>
        <nav className=" mx-auto">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Send Money</a>
          <a className="link link-hover">Cash Out</a>
          <a className="link link-hover">Cash In</a>
          <a className="link link-hover">Statement</a>
        </nav>
        <nav className=" mx-auto">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className=" mx-auto">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-black py-2">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Payasa
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
