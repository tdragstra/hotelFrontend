import React from "react";
import { Link } from "react-router-dom";
import {
	selectAllRooms,
	selectReservationData,
	selectStep,
} from "../../store/hotel/selectors";
import { useDispatch, useSelector } from "react-redux";
import { updateStep } from "../../store/hotel/slice";
import { showMessageWithTimeout } from "../../store/appState/actions";

export default function Steps() {
	const step = useSelector(selectStep);
	const rooms = useSelector(selectAllRooms);
	const reservationData = useSelector(selectReservationData);
	const dispatch = useDispatch();

	return (
		<div class="steps steps-dark">
			<Link
				to="#"
				onClick={() => {
					dispatch(updateStep("reservation"));
				}}
				className={
					step === "reservation" ? "step-item active current" : "step-item"
				}
			>
				<div class="step-progress">
					<span class="step-count">1</span>
				</div>
				<div class="step-label">
					<i class="ci-cart"></i>
					Book your room
				</div>
			</Link>

			<Link
				to="#"
				onClick={() => {
					reservationData.rooms.length >= 1
						? dispatch(updateStep("details"))
						: dispatch(
								showMessageWithTimeout(
									"success",
									true,
									"Please book a room first"
								)
						  );
				}}
				className={
					step === "details" ? "step-item active current" : "step-item"
				}
			>
				<div class="step-progress">
					<span class="step-count">2</span>
				</div>
				<div class="step-label">
					<i class="ci-user-circle"></i>
					Your details
				</div>
			</Link>

			<Link
				to="#"
				onClick={() => {
					reservationData.user?.firstName
						? dispatch(updateStep("completion"))
						: dispatch(
								showMessageWithTimeout(
									"success",
									true,
									"Please enter your personal details first"
								)
						  );
				}}
				className={
					step === "completion" ? "step-item active current" : "step-item"
				}
			>
				<div class="step-progress">
					<span class="step-count">3</span>
				</div>
				<div class="step-label">
					<i class="ci-package"></i>
					Last step
				</div>
			</Link>

			<div></div>
		</div>
	);
}
