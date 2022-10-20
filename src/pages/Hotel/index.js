import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchAllRooms, postNewReservation } from "../../store/hotel/actions";
import { selectAllRooms } from "../../store/hotel/selectors";
import Reservation from "../../components/Reservation";
import Steps from "../../components/Steps";
import moment from "moment";
import Footer from "../../components/Footer";
import {
	selectAdults,
	selectChildren,
	selectReservationData,
} from "../../store/hotel/selectors";
import { Counter } from "../../components/Counter";
// import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import "./app.css";
// import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { addDateReservation } from "../../store/hotel/slice";
import { ReservationForm } from "../../components/ReservationForm";
import { selectStep } from "../../store/hotel/selectors";
import { updateStep } from "../../store/hotel/slice";
import { ReservationConfirm } from "../../components/ReservationConfirm";
import Leaflet from "../../components/Map";
import Features from "../../components/Features";

export default function Spaces() {
	const dispatch = useDispatch();
	const rooms = useSelector(selectAllRooms);
	const step = useSelector(selectStep);
	// const adults = useSelector(selectAdults);
	// const children = useSelector(selectChildren);
	const reservationData = useSelector(selectReservationData);
	console.log(reservationData);

	const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
	const [tomDate, setTomDate] = useState(
		moment(date).add(1, "days").format("YYYY-MM-DD")
	);
	const sleeps = (e) => {
		const sleepsArray = [];
		for (let i = 0; i < e; i++) {
			sleepsArray.push(<i className="ci-user"></i>);
		}
		return sleepsArray;
	};

	const freeCancelCheck = (e) => {
		const cancelDate = moment(e).subtract(2, "days").format("DD-MM-YYYY");
		return cancelDate;
	};

	// const hideAll = (step) => {
	// 	if (step === { step }) {
	// 		return "initial";
	// 	} else return "none";
	// };

	useEffect(() => {
		dispatch(fetchAllRooms());
		dispatch(addDateReservation({ fromDate: date, toDate: tomDate }));
	}, [dispatch, date, tomDate]);

	if (!rooms) {
		return (
			<div
				className="spinner-border"
				style={{ width: "3rem", height: "3rem" }}
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		);
	}
	return (
		<>
			{/* <Jumbotron className="App">
				<h1>Banner</h1>
			</Jumbotron> */}

			<Container
				style={{
					backgroundColor: "#f7f5f5",
					padding: 20,
					marginTop: 10,
					marginBottom: 20,
				}}
			>
				<Steps />
				<hr />
				<br />
				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						fontSize: "25px",
						flexDirection: "row",
					}}
				>
					<div>
						<label>From : </label>
						<input
							type="date"
							value={date}
							style={{ width: "250px", fontSize: "25px" }}
							onChange={(e) => {
								setDate(e.target.value);
								setTomDate(
									moment(e.target.value).add(1, "days").format("YYYY-MM-DD")
								);
								// dispatch(
								// 	addDateReservation({
								// 		fromDate: e.target.value,
								// 	})
								// );
							}}
						></input>
					</div>
					<div>
						<label>To : </label>
						<input
							type="date"
							value={tomDate}
							style={{ width: "250px", fontSize: "25px" }}
							onChange={(e) => {
								if (e.target.value <= date) {
									setTomDate(moment(date).add(1, "days").format("YYYY-MM-DD"));
								} else {
									setTomDate(e.target.value);
								}
							}}
						></input>
					</div>
				</div>
				<Counter />
				{/* {step !== "completion" ? ( */}
				<div>
					<div
						class="table-responsive"
						// style={{ display: hideAll("reservation") }}
						style={{ display: step === "reservation" ? "initial" : "none" }}
					>
						<table class="table">
							<thead>
								<tr
									style={{
										height: "75px",
										backgroundColor: "4b566b",
									}}
								>
									<th>Room</th>
									<th>Sleeps</th>
									<th>Today's price</th>
									<th>Choices</th>
									<th>Select rooms</th>
								</tr>
							</thead>
							<tbody>
								{rooms.map((r) => {
									return (
										<Reservation
											key={r.id}
											id={r.id}
											title={r.roomType.name}
											size={r.size}
											price={r.roomType.price}
											option={r.roomType.options}
											capacityF={sleeps}
											capacity={r.roomType.capacity}
											singleBeds={r.roomType.singleBeds}
											freeCancel={freeCancelCheck(date)}
											available={r.roomType.available}
										/>
									);
								})}
								<tr>
									<td colSpan={5}>
										<div>
											<Button
												style={{ width: "100%" }}
												onClick={
													() => {
														dispatch(updateStep("details"));
													}
													// dispatch(postNewReservation(reservationData))
												}
											>
												Make reservation{" "}
											</Button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div
						style={{ display: step === "details" ? "initial" : "none" }}
						// style={{ display: hideAll("details") }}
					>
						<ReservationForm />
					</div>
					<div
						style={{ display: step === "completion" ? "initial" : "none" }}
						// style={{ display: hideAll("completion") }}
					>
						<ReservationConfirm />
					</div>
				</div>
			</Container>

			<Features />
			<br></br>
			<Leaflet />
			<br></br>
			<Footer />
		</>
	);
}

// const current = new Date();
// const newdate = current.toISOString().split("T")[0];
// console.log("hello", newdate);
// const todaysDate = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;
// console.log(todaysDate);

// const tomorowsDate = `${
// 	current.getDate() + 1
// }/${current.getMonth()}/${current.getFullYear()}`;
// console.log(tomorowsDate);

// setTomDate(moment(e.target.value).add(1, "days").format("YYYY-MM-DD"));

// {
// 	SwitchExample({
// 		label: "Request ground floor",
// 		id: props.id + "groundFloor",
// 		dispatch: changeGroundFloor(),
// 	});
// }
// {
// 	SwitchExample({
// 		label: "Request balcony",
// 		id: props.id + "balcony",
// 		dispatch: changeBalcony(true),
// 	});
// }

// {
// 	SwitchExample({
// 		label: "Request single beds",
// 		id: props.id + "singleBeds",
// 		dispatch: changeSingle(),
// 	});
// }
