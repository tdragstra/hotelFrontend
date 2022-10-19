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
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { DetailsEditForm } from "../../components/DetailsEditForm";
import "./index.css";

export default function AdminReservations() {
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
	}, [dispatch]);
	console.log("wtf", reservations);
	if (!reservations) {
		return <Loading />;
	}

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
						width: "80%",
						marginLeft: "50px",
					}}
				>
					<h3> Reservations </h3>
					<br />

					<div style={{ paddingTop: 50 }}>
						{reservations.map((e, index) => (
							<div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										paddingBottom: "100px",
									}}
								>
									<div>
										<h6>
											ReservationId: {e.id}. {e.user.firstName}{" "}
											{e.user.lastName}
										</h6>
										<div className="Status"> STATUS: {e.status.name}</div>

										<div style={{ display: "flex" }}>
											<p>From: {e.fromDate}</p> - <p>To: {e.toDate}</p>{" "}
										</div>
										<div
											style={{
												width: "150%",
											}}
										>
											Estimated arrival time: {e.arrivalTime}
											<DetailsEditForm
												firstName={e.user.firstName}
												lastName={e.user.lastName}
												address1={e.user.address1}
												houseNumber={e.user.houseNumber1}
												emailAddress={e.user.email}
											/>
											<br></br>
											<h6> Rooms reserved: </h6>
											{e.reservationRooms.map((e) => (
												<div>
													<p
														style={{
															textTransform: "uppercase",
															color: "black",
														}}
													>
														{e.room.roomType.name}
													</p>
													{e.requestBalcony ||
													e.requestSingleBeds ||
													e.requestGroundFloor ? (
														<div style={{ display: "flex" }}>
															<h6>Special requests: </h6>{" "}
															<p>
																{e.requestBalcony ? "Balcony, " : ""}
																{e.singleBeds ? "Single beds, " : ""}
																{e.requestGroundFloor ? "Ground floor, " : ""}
															</p>
														</div>
													) : (
														""
													)}
													<hr></hr>
												</div>
											))}
										</div>
										{/* <h6> Rooms </h6>
									{e.reservations.rooms.map((e) => (
										<p>Room: {e.roomId}</p>
									))} */}
									</div>

									<div>
										<Button
											onClick={() => {
												dispatch(deleteFeature(e.id));
											}}
											style={{ backgroundColor: "blue", marginRight: 5 }}
										>
											Edit
										</Button>
										<Button
											style={{ marginRight: 5 }}
											onClick={() => {
												dispatch(deleteReservation(e.id));
											}}
										>
											x
										</Button>
									</div>
								</div>

								<hr></hr>
								<br></br>
							</div>
						))}
					</div>
				</div>
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

				<button
					onClick={() => {
						dispatch(
							updateReservation(12, {
								fromDate: "2023-12-16",
								toDate: "2024-12-17",
								totalPrice: 250,
								adults: 5,
								children: 2,
								reservationRooms: [
									{
										roomId: 1,
										singleBeds: false,
										requestBalcony: true,
										requestGroundFloor: false,
									},
									{
										roomId: 2,
										singleBeds: true,
										requestBalcony: false,
										requestGroundFloor: true,
									},
									{
										roomId: 3,
										singleBeds: false,
										requestBalcony: true,
										requestGroundFloor: false,
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
