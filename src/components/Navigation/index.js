import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./index.css";
export default function Navigation() {
	const token = useSelector(selectToken);
	const profile = useSelector(selectUser);

	const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

	return (
		<Navbar
			className="nav"
			style={{
				width: "100%",
				height: "60px",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<div style={{ display: "flex" }}>
				<Navbar.Brand as={NavLink} to="/" style={{ paddingLeft: 10 }}>
					Hotel Moser
				</Navbar.Brand>
				<Nav fill>
					<NavbarItem path="/" linkText="Home" />
					{token ? (
						<NavbarItem path="/myreservations" linkText="My reservations" />
					) : null}
				</Nav>
			</div>
			<div>
				<div style={{ marginRight: 25, display: "flex" }}>
					{loginLogoutControls}
				</div>
			</div>
		</Navbar>
	);
}
