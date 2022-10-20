import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";
import { selectPage } from "../../store/admin/selectors";
import AdminReservations from "./reservations";
import AdminFeatures from "./features";
import { changePage } from "../../store/admin/slice";
import LoggedIn from "../../components/Navigation/LoggedIn";
import LoggedOut from "../../components/Navigation/LoggedOut";

export default function AdminHome() {
	const [email, setEmail] = useState("timbo040@gmail.com");
	const [password, setPassword] = useState("123");
	const dispatch = useDispatch();
	const token = useSelector(selectToken);
	const profile = useSelector(selectUser);

	const page = useSelector(selectPage);
	const { pathname } = useLocation();

	const navigate = useNavigate();
	console.log(profile);
	const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

	useEffect(() => {
		if (profile) {
			dispatch(changePage("reservations"));
		} else {
			dispatch(changePage("login"));
		}

		if (pathname === "/admin/reservations") {
			dispatch(changePage("reservations"));
		}
		if (pathname === "/admin/features") {
			dispatch(changePage("features"));
		}
	}, [token, navigate, pathname, dispatch]);

	function submitForm(event) {
		event.preventDefault();

		dispatch(login(email, password));

		setEmail("");
		setPassword("");
	}

	if (page === "reservations") {
		return <AdminReservations />;
	}

	if (page === "features") {
		return <AdminFeatures />;
	}

	return (
		<div
			style={{
				backgroundColor: "white",
				minHeight: "500px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				marginTop: "10%",

				// display: "flow",
				// justifyContent: "center",
			}}
		>
			<Container>
				<Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
					<h1 className="mt-5 mb-5"> Login as administrator</h1>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							type="email"
							placeholder="Enter email"
							required
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							placeholder="Password"
							required
						/>
					</Form.Group>
					<Form.Group className="mt-5">
						<Button variant="primary" type="submit" onClick={submitForm}>
							Log in
						</Button>
					</Form.Group>
					<br />
					<Link to="/" style={{ textAlign: "center" }}>
						Not an administrator?
					</Link>
				</Form>
			</Container>
		</div>
	);
}
