import { Outlet } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
