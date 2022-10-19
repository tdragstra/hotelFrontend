import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createFeature,
	deleteFeature,
	deleteReservation,
	fetchFeatures,
	fetchReservations,
	updateReservation,
} from "../../store/admin/actions";
import { selectReservations } from "../../store/admin/selectors";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

export default function AdminHome() {
	const [location, setLocation] = useState(false);
	const handleOnChange = (event) => {
		setLocation({ value: event.target.value });
	};
	const reservations = useSelector(selectReservations);
	const dispatch = useDispatch();
	const { register, handleSubmit, formState } = useForm({
		defaultValues: {
			type: "feature",
			distanceTo: null,
		},
	});

	// console.log(errors);
	const errors = formState.errors;

	useEffect(() => {
		dispatch(fetchReservations());
		dispatch(fetchFeatures());
	}, []);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "white",
				width: "50%",
			}}
		>
			<h1> admin </h1>
			<button
				onClick={() => {
					dispatch(
						createFeature({
							name: "Bla Restaurant",
							type: "location",
							distanceTo: 2.3,
						})
					);
				}}
			>
				Create feature
			</button>
			<div>
				<form
					onSubmit={handleSubmit((data) => {
						console.log("data", data);
						dispatch(createFeature(data));
					})}
				>
					<div style={{ display: "flex", marginRight: "5px" }}>
						<div>
							<h3> Add feature </h3>
							<label>Enter title of feature:</label> <br />
							<input
								{...register("name", {
									required: "Title is required",
								})}
								placeholder="ex. Swimming pool"
								// value={date}
							/>
							<p> {errors?.name?.message}</p>
							<label>Type:</label>{" "}
							<select {...register("type", {})} onChange={handleOnChange}>
								<option
									value="location"
									// onChange={() => setLocation(!location)}
								>
									Location
								</option>
								<option value="feature">Feature</option>
								<option value="house rules">House rules</option>
							</select>
							<p> {errors?.type?.message}</p>
							{location.value === "location" ? (
								<p>
									<label>Distance to location:</label>
									<br />
									<input
										{...register("distanceTo", {})}
										placeholder="5"
									></input>{" "}
									KM
									<p> {errors?.distanceTo?.message}</p>
								</p>
							) : (
								""
							)}
							<Button type="submit"> Add feature </Button>
							<br />
							<br />
						</div>
					</div>
				</form>
			</div>
			<button
				onClick={() => {
					dispatch(deleteFeature(8));
				}}
			>
				Delete feature
			</button>
			<button
				onClick={() => {
					dispatch(
						updateReservation(5, {
							fromDate: "2023-12-16",
							toDate: "2024-12-17",
							totalPrice: 250,
							adults: 5,
							children: 2,
							reservationRooms: [
								{
									roomId: 3,
									singleBeds: true,
									requestBalcony: true,
									requestGroundFloor: false,
								},
								{
									roomId: 1,
									singleBeds: false,
									requestBalcony: false,
									requestGroundFloor: true,
								},
								{
									roomId: 1,
									singleBeds: true,
									requestBalcony: true,
									requestGroundFloor: true,
								},
							],
							// rooms: [{ roomTypeId: 1 }, { roomTypeId: 2 }],
						})
					);
				}}
			>
				Update reservation
			</button>
			<button
				onClick={() => {
					dispatch(deleteReservation(4));
				}}
			>
				{" "}
				Delete reservation{" "}
			</button>
		</div>
	);
}
