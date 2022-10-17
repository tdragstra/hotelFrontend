import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./index.css";
export default function Navigation() {
	const token = useSelector(selectToken);

	const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

	return (
		<Navbar
			style={{
				backgroundColor: "black",
				width: "100%",
				display: "flex",
				flexDirection: "row-reverse",
			}}
		>
			<Navbar.Brand as={NavLink} to="/">
				Gasthaus Moser
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav
					fill
					style={{
						backgroundColor: "",
						width: "50%",
					}}
				>
					<NavbarItem path="/" linkText="Home" />
					{token ? <NavbarItem path="/myspace" linkText="My Space" /> : null}
					{loginLogoutControls}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
