import React from "react";
import { Outlet, useLocation } from "react-router-dom";
// * components
import Sidebar from "../components/Sidebar";
import DrawerSide from "../components/DrawerSide";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
type Props = {};

const Layout = (props: Props) => {
	const { pathname } = useLocation();
	return (
		<>
			<div className="drawer" id="App">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col h-screen">
					<Navbar />
					<div className="grid grid-cols-[1fr,3fr] sm:grid-cols-1 gap-10 h-full">
						<Sidebar />
						{/* Page content is render here */}
						{!["/signin", "/signup"].includes(pathname) && <Outlet />}
					</div>
					{["/signin", "/signup"].includes(pathname) && <Outlet />}
					<Footer />
				</div>
				<DrawerSide />
			</div>
		</>
	);
};

export default Layout;
