import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Hotel from "./pages/Hotel";
import AdminHome from "./pages/Admin";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import CarouselFadeExample from "./components/Banner";
import AdminReservations from "./pages/Admin/reservations";
import AdminFeatures from "./pages/Admin/features";

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAppLoading);
	const { pathname } = useLocation();
	console.log("path", pathname);

	useEffect(() => {
		dispatch(getUserWithStoredToken());
	}, [dispatch]);

	return (
		<div className="app">
			{pathname === "/" && <Navigation />}
			{pathname === "/login" && <Navigation />}
			{pathname === "/myreservations" && <Navigation />}

			{pathname === "/myreservations" && <CarouselFadeExample wrap="true" />}
			{pathname === "/" && <CarouselFadeExample wrap="true" />}

			{pathname === "/" && <MessageBox />}
			{pathname === "/login" && <MessageBox />}
			{pathname === "/myreservations" && <MessageBox />}

			{isLoading ? <Loading /> : null}
			<Routes>
				<Route exact path="/" element={<Hotel />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<AdminHome />}>
					<Route path="reservations" element={<AdminReservations />} />
					<Route path="features" element={<AdminFeatures />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

// const { pathname } = useLocation();
//   console.log("path", pathname);

//   return (
//     <div className="App">
//       {pathname.includes("admin") && <NavBar />}

// {

/* <div class="d-flex flex-column justify-content-center w-100 h-100">

	<div class="d-flex flex-column justify-content-center align-items-center">
		<h1 class="fw-light text-white m-0">Pure CSS Gradient Background Animation</h1>
		<div class="btn-group my-5">
			<a href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip" class="btn btn-outline-light" aria-current="page"><i class="fas fa-file-download me-2"></i> SOURCE CODE</a>
			<a href="https://codepen.io/P1N2O/full/pyBNzX" class="btn btn-outline-light">FULL SCREEN <i class="fas fa-expand ms-2"></i></a>
		</div>
		<a href="https://manuel.pinto.dev" class="text-decoration-none">
			<h5 class="fw-light text-white m-0">— Pen by Manuel Pinto —</h5>
		</a>
	</div>
</div>
</div> */
