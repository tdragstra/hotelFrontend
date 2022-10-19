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
import {
	selectReservations,
	selectFeatures,
} from "../../store/admin/selectors";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { emphasize } from "@mui/material";
import { width } from "@mui/system";
import Container from "react-bootstrap/Container";

export default function AdminFeatures() {
	const [location, setLocation] = useState(false);
	const handleOnChange = (event) => {
		setLocation({ value: event.target.value });
	};
	const reservations = useSelector(selectReservations);
	const features = useSelector(selectFeatures);
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
		<Container
			style={{
				backgroundColor: "white",
				width: "50%",
				alignContent: "center",
				marginTop: 20,
				marginBottom: 20,
			}}
		>
			<div
				style={{
					backgroundColor: "white",
					width: "100%",
					alignContent: "center",
				}}
			>
				<h1> ADMIN </h1>
				<hr></hr>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "50%",
						marginLeft: "50px",
					}}
				>
					<h3> Features </h3>
					<br />

					<div>
						<div>
							<form
								onSubmit={handleSubmit((data) => {
									console.log("data", data);
									dispatch(createFeature(data));
								})}
							>
								<div
									style={{
										display: "flex",
										marginRight: "5px",
										height: "220px",
									}}
								>
									<div>
										<h5> Add feature </h5>
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
										<br />
										<br />
									</div>
								</div>
								<Button type="submit"> Add feature </Button>
							</form>
						</div>
					</div>
					<div style={{ paddingTop: 50 }}>
						{features.map((e, index) => (
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "10px",
								}}
							>
								<div>
									<h6>
										{index + 1}. {e.name}
									</h6>

									{e.distanceTo ? (
										<p>
											Location: Distance to {e.name} : {e.distanceTo} km
										</p>
									) : (
										<p
											style={{
												textTransform: "capitalize",
											}}
										>
											Type: {e.type}
										</p>
									)}
								</div>
								<div>
									<Button
										onClick={() => {
											dispatch(deleteFeature(e.id));
										}}
									>
										x
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>

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
		</Container>
	);
}
