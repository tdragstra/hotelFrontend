import React, { useState } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectBalcony,
	selectGroundFloor,
	selectSingleBeds,
} from "../../store/hotel/selectors";
import {
	changeBalcony,
	changeGroundFloor,
	changeSingle,
} from "../../store/hotel/slice";
import Form from "react-bootstrap/Form";
import { setMessage } from "../../store/appState/slice";
import { addRoomAndNumber } from "../../store/hotel/slice";
import { BsFillPrinterFill } from "react-icons/bs";

export default function Reservation(props) {
	const dispatch = useDispatch();
	const [rooms, setRooms] = useState(0);
	const handleChange = (event) => {
		setRooms(event.target.value);
		if (event.target.value) {
			dispatch(
				addRoomAndNumber({
					id: props.id,
					price: props.price,
					number: parseInt(event.target.value),
				})
			);
		}
	};
	// const balconyValue = useSelector(selectBalcony);

	// const singleBedsValue = useSelector(selectSingleBeds);

	// const groundFloorValue = useSelector(selectGroundFloor);

	// const addRoom = (e) => {
	// 	dispatch(addRoomAndNumber({ id: props.id, price: props.price }));
	// };
	function SwitchExample(e) {
		return (
			<div>
				<Form>
					<Form.Check
						type="switch"
						id={e.id}
						label={e.label}
						onChange={() => {
							dispatch(e.dispatch);
						}}
					/>
				</Form>
			</div>
		);
	}
	function checkReservation(e) {
		if (rooms >= 1) {
			return console.log({
				name: props.title,
				rooms: rooms,
				price: props.price,
			});
		} else {
			return dispatch(setMessage("success", "failed"));
		}
	}

	return (
		<tr>
			<th scope="row">
				<h5> {props.title} </h5>
				<br />
				<br />
				Features:
				<br />
				{props.size}m2
				<p>
					{props.option.map((e) => (
						<>
							- <i class="ci-key"></i> {e.name}
						</>
					))}
				</p>
			</th>
			<td>{props.capacityF(props.capacity)}</td>
			<td>
				€ {props.price} <br />
				<p style={{ fontSize: "10px" }}> Includes taxes and fees </p>
			</td>
			<td>
				Free cancelation until 23:59 on {props.freeCancel} <br />
				<br />
				{SwitchExample({
					label: "Request ground floor",
					id: props.id + "groundFloor",
					dispatch: changeGroundFloor(),
				})}
				{SwitchExample({
					label: "Request balcony",
					id: props.id + "balcony",
					dispatch: changeBalcony(),
				})}
				{props.capacity === 2 ? (
					<div>
						{SwitchExample({
							label: "Request single beds",
							id: props.id + "singleBeds",
							dispatch: changeSingle(),
						})}
					</div>
				) : (
					""
				)}
			</td>
			<td
				style={{
					display: "flex",
					alignItems: "center",
					alignContent: "center",
				}}
			>
				<i className="ci-key" style={{ fontSize: "25px" }}></i>
				<Form.Control
					as="select"
					aria-label="Default select example"
					style={{ height: "50px" }}
					onChange={handleChange}
				>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</Form.Control>

				{/* <div class="input-group" id="numberRooms">
					<span class="input-group-text fw-medium">
						<i class="ci-key"></i>
					</span>
					<form>
						<select class="form-select">
							<option value="0">0</option>
							<option value="1" onClick={console.log("tests")}>
								1 , &nbsp;(€{props.price})
							</option>
							<option value="2">2 , &nbsp;(€{props.price * 2})</option>
							<option value="3">3 , &nbsp;(€{props.price * 3})</option>
						</select>
					</form>
				</div> */}
			</td>
			{/* <button onClick={checkReservation}> ju </button> */}
			{/* <button
				onClick={dispatch(
					addRoomAndNumber({ id: props.id, price: props.price })
				)}
			>
				ju
			</button> */}
		</tr>
	);
}
