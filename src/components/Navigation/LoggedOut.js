import React from "react";
import NavbarItem from "./NavbarItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LoggedOut() {
	const navigate = useNavigate();
	return (
		<>
			<Button onClick={() => navigate("/login")}> Login </Button>
		</>
	);
}
