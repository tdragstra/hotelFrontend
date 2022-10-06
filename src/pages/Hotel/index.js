import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchAllRooms } from "../../store/hotel/actions";
import { selectAllRooms } from "../../store/hotel/selectors";
import Reservation from "../../components/Reservation";
import Steps from "../../components/Steps";
import moment from "moment";
import Footer from "../../components/Footer";
import { selectAdults, selectChildren } from "../../store/hotel/selectors";
import { Counter } from "../../components/Counter";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./app.css";

export default function Spaces() {
	const dispatch = useDispatch();
	const rooms = useSelector(selectAllRooms);
	const adults = useSelector(selectAdults);
	const children = useSelector(selectChildren);

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

	useEffect(() => {
		dispatch(fetchAllRooms());
	}, [dispatch]);

	if (!rooms) {
		return (
			<div
				class="spinner-border"
				style={{ width: "3rem", height: "3rem" }}
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		);
	}
	return (
		<>
			<Jumbotron className="App">
				<h1>Banner</h1>
			</Jumbotron>

			<Container>
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

				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr
								style={{
									height: "100px",
									backgroundColor: "lightgrey",
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
						</tbody>
					</table>
				</div>
			</Container>
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