import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectReservationData, selectStep } from "../../store/hotel/selectors";
import { updateStep } from "../../store/hotel/slice";

export const ReservationConfirm = () => {
	const step = useSelector(selectStep);
	const reservationData = useSelector(selectReservationData);
	const dispatch = useDispatch();

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
					<p> You can check in from 15:00 PM </p>
					<h5>Checkout date: {reservationData.toDate}</h5>
					<p> Normal checkout is before 11:00 AM</p>
				</div>
			</div>
			<div
				style={{
					backgroundColor: "grey",
					color: "white",
					padding: "10px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div>
					<h3
						style={{
							backgroundColor: "grey",
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
							backgroundColor: "grey",
							color: "white",
						}}
					>
						{" "}
						Arrival Time:{" "}
					</h3>
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
