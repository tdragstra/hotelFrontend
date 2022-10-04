import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchAllRooms } from "../../store/hotel/actions";
import { selectAllRooms } from "../../store/hotel/selectors";
import Reservation from "../../components/Reservation";
import moment from "moment";

export default function Spaces() {
	const dispatch = useDispatch();
	const rooms = useSelector(selectAllRooms);

	const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
	const [tomDate, setTomDate] = useState(
		moment(date).add(1, "days").format("YYYY-MM-DD")
	);

	useEffect(() => {
		dispatch(fetchAllRooms());
	}, [dispatch]);

	return (
		<>
			<Jumbotron className="App">
				<h1>Banner</h1>
			</Jumbotron>
			<label style={{ width: "370px", fontSize: "30px" }}>From</label>
			<input
				type="date"
				value={date}
				style={{ width: "370px", fontSize: "30px" }}
				onChange={(e) => {
					setDate(e.target.value);
					setTomDate(
						moment(e.target.value).add(1, "days").format("YYYY-MM-DD")
					);
				}}
			></input>
			<label style={{ width: "370px", fontSize: "30px" }}>To</label>
			<input
				type="date"
				value={tomDate}
				style={{ width: "370px", fontSize: "30px" }}
				onChange={(e) => {
					if (e.target.value <= date) {
						setTomDate(moment(date).add(1, "days").format("YYYY-MM-DD"));
					} else {
						setTomDate(e.target.value);
					}
				}}
			></input>
			<Container>
				{rooms.map((r) => {
					return (
						<Reservation
							key={r.id}
							id={r.id}
							title={r.roomType.name}
							size={r.size}
							capacity={r.roomType.capacity}
							singleBeds={r.roomType.singleBeds}
							available={r.roomType.available}
						/>
					);
				})}
			</Container>
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
