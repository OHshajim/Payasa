import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen  bg-black">
            <Outlet/>
        </div>
    );
};

export default Layout;