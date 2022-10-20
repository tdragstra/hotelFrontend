import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postNewReservation } from "../../store/hotel/actions";
import { selectReservationData, selectStep } from "../../store/hotel/selectors";
import {
	addArrivalTime,
	addPassword,
	updateStep,
} from "../../store/hotel/slice";
import "./index.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const ReservationConfirm = () => {
	const step = useSelector(selectStep);
	const reservationData = useSelector(selectReservationData);
	const dispatch = useDispatch();
	const [arrivalTime, setArrivalTime] = useState();
	const [password, setPassword] = useState();

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			We use this arrival time to recieve your party for the check-in. If your
			party arrives late we will send you a code to a key box in front of the
			hotel.
		</Tooltip>
	);

	const renderTooltipPassword = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			We need a password to set up an account. Here you can change your arrival
			time and cancel your reservation. If you delete your reservation we will
			also delete all your personal info.
		</Tooltip>
	);

	const onChange = (e) => {
		setArrivalTime(e.target.value);
		dispatch(addArrivalTime(e.target.value));
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
		dispatch(addPassword(e.target.value));
	};

	return (
		<div
			style={{
				backgroundColor: "white",
			}}
		>
			<div
				style={{
					backgroundColor: "white",
					display: "flex",
					justifyContent: "space-between",
					paddingRight: 50,
				}}
			>
				<div
					style={{
						backgroundColor: "white",
					}}
				>
					<h3>Check your personal details</h3>
					<p>
						Name: {reservationData.user.firstName}{" "}
						{reservationData.user.lastName}
					</p>
					<p>
						Invoice address: {reservationData.user.address1}{" "}
						{reservationData.user.houseNumber1},{" "}
						{reservationData.user?.houseNumber2}{" "}
						{reservationData.user?.postalCode}{" "}
						{reservationData.user?.selectCountry}
					</p>
					<p>Email address: {reservationData.user.email}</p>
				</div>
				<div>
					<h5>First night: {reservationData.fromDate}</h5>
					<p> You can check-in from 15:00 PM </p>
					<h5>Checkout date: {reservationData.toDate}</h5>
					<p> Normal check-out is before 11:00 AM</p>
				</div>
			</div>
			<div
				style={{
					backgroundColor: "#4c5566",
					color: "white",
					padding: "10px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div>
					<h3
						style={{
							color: "white",
						}}
					>
						{" "}
						Your room(s)
					</h3>
					{reservationData.rooms.map((r) => {
						return <p>{r.roomType.name}</p>;
					})}
				</div>
				<div>
					<h3
						style={{
							color: "white",
						}}
					>
						{" "}
						Arrival Time{" "}
						<OverlayTrigger
							placement="right"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip}
						>
							<i class="ci-announcement"></i>
						</OverlayTrigger>
						<br></br>
					</h3>
					<p> Choose your estimated arrival time</p>
					<label>
						<select
							style={{ width: "200px" }}
							required
							onChange={onChange}

							// type="number"
							// placeholder="age"
							// min="18"
							// value={number}
							// onChange={(e) => setNumber(e.target.value)}
						>
							{" "}
							<option value="15:00:00">15:00</option>
							<option value="15:30:00">15:30</option>
							<option value="16:00:00">16:00</option>
							<option value="17:00:00">17:00</option>
							<option value="18:00:00">18:00</option>
							<option value="19:00:00">19:00</option>
							<option value="20:00:00">22:00</option>
							<option value="21:00:00">23:00</option>
						</select>
					</label>
					<h3
						style={{
							color: "white",
						}}
					>
						{" "}
						Your password{" "}
						<OverlayTrigger
							placement="right"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltipPassword}
						>
							<i class="ci-announcement"></i>
						</OverlayTrigger>
						<br></br>
					</h3>

					<label>
						<input
							style={{ width: "200px" }}
							required
							onChange={onChangePassword}
							placeholder="Enter your password"

							// type="number"
							// placeholder="age"
							// min="18"
							// value={number}
							// onChange={(e) => setNumber(e.target.value)}
						></input>
					</label>
				</div>
			</div>

			<div>
				<Button
					style={{
						width: "100%",
					}}
					onClick={
						() => {
							dispatch(updateStep("completion"));
							dispatch(postNewReservation(reservationData));
						}

						// dispatch(postNewReservation(reservationData))
					}
				>
					Make reservation{" "}
				</Button>
			</div>
		</div>
	);
};

// {reservationData.rooms.map((r) => {
// 						return (
// 						<>
// 								name ={r.id}
// 								id={r.id}
// 								title={r.roomType.name}
// 								size={r.size}
// 								price={r.roomType.price}
//                                 </>
//                         )
// 					<tr>
// 						<td colSpan={5}>
// 							<div>
// 								<Button
// 									style={{
// 										width: "100%",
// 									}}
// 									onClick={
// 										() => {
// 											dispatch(updateStep("details"));
// 										}

// 										// dispatch(postNewReservation(reservationData))
// 									}
// 								>
// 									Make reservation{" "}
// 								</Button>
// 							</div>
//                             </td></tr>
