import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	console.log(user);
	return (
		<>
			<h6 style={{ padding: 50, color: "white" }}> {user?.user?.firstName}</h6>
			<Button onClick={() => dispatch(logOut())}>Logout</Button>
		</>
	);
}
