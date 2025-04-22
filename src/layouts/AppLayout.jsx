import Footer from "../common/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";

const AppLayout = () => {
    return <>
        <ScrollRestoration />
        <Navbar />
        <Outlet />
        <Footer />
    </>
}

export default AppLayout;