import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useForm } from "react-hook-form";
import { addUserInfo, updateStep } from "../../store/hotel/slice";
import "./index.css";
import { selectReservationData } from "../../store/hotel/selectors";
import { Button } from "react-bootstrap";

export const ReservationForm = () => {
	const [businessState, setBusinessState] = useState(false);
	const { register, handleSubmit, formState } = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
		},
	});

	// console.log(errors);
	const dispatch = useDispatch();
	const [number, setNumber] = useState();
	const errors = formState.errors;
	const reservationData = useSelector(selectReservationData);

	return (
		<div>
			<form
				onSubmit={handleSubmit((data) => {
					console.log("data", data);
					dispatch(addUserInfo(data));
					dispatch(updateStep("completion"));
				})}
			>
				<div style={{ display: "flex", marginRight: "5px" }}>
					<div>
						<h1> Enter your details</h1>
						<label>
							Enter your first name:
							<input
								{...register("firstName", {
									required: "First name is required",
								})}
								placeholder="first name"
								// value={date}
							/>
						</label>
						<p> {errors?.firstName?.message}</p>
						<label>
							Enter your last name.
							<input
								{...register("lastName", {
									// valueAsNumber: true,
									// min: 18,
									required: "Last name is required",
								})}
								placeholder="last name"
								// type="number"
								// placeholder="age"
								// min="18"
								// value={number}
								// onChange={(e) => setNumber(e.target.value)}
							></input>
						</label>
						<p> {errors?.lastName?.message}</p>

						<label>
							Enter your e-mail
							<input
								{...register("email", {
									required: "E-mail is required",
								})}
								placeholder='"your@email.com"'
							></input>
						</label>
						<p> {errors?.email?.message}</p>
						<label>
							Enter your street name
							<input
								{...register("address1", {
									required: "Address is required",
								})}
								placeholder='"Peachy street"'
							></input>
						</label>
						<p> {errors?.address1?.message}</p>
						<label>
							Enter an optional address line.
							<input
								{...register("address2", {})}
								placeholder='"Building 101"'
							></input>
						</label>
						<p> {errors?.address2?.message}</p>
						<label>
							Enter your house number.
							<input
								{...register("houseNumber1", {
									valueAsNumber: "Only numbers are allowed, without addition",
									required: "House number is required",
								})}
								placeholder='"8"'
								type="number"

								// placeholder="age"
								// min="18"
								// value={number}
								// onChange={(e) => setNumber(e.target.value)}
							></input>
						</label>
						<p> {errors?.houseNumber1?.message}</p>
						<label>
							Enter a optional addition to your house number like "B" or 12.
							<input
								{...register("houseNumber2", {})}
								placeholder="'B' or '12'"
								// type="number"
								// placeholder="age"
								// min="18"
								// value={number}
								// onChange={(e) => setNumber(e.target.value)}
							></input>
						</label>
						<p></p>
						<label>
							Enter your postal code:
							<input
								{...register("postalCode", {})}
								placeholder="'3743AB' or '79576' "

								// type="number"
								// placeholder="age"
								// min="18"
								// value={number}
								// onChange={(e) => setNumber(e.target.value)}
							></input>
						</label>
						<p> {errors?.postalCode?.message}</p>
						<label>
							Choose your country.
							<select
								{...register("selectCountry", {})}

								// type="number"
								// placeholder="age"
								// min="18"
								// value={number}
								// onChange={(e) => setNumber(e.target.value)}
							>
								{" "}
								<option value="Netherlands">Netherlands</option>
								<option value="Germany">Germany</option>
								<option value="France">France</option>
							</select>
						</label>
						<p></p>

						<Button type="submit" style={{ width: "188%" }}>
							{" "}
							Check and confirm{" "}
						</Button>
						<br />
						<br />
					</div>
					<div>
						<h2> Business booking? </h2>
						<label>
							Booking under business name? Check the box :
							<input
								{...register("business", {})}
								onChange={() => setBusinessState(!businessState)}
								checked={businessState}
								type="checkbox"
							></input>
						</label>
						<p></p>
						{businessState ? (
							<div>
								<label>
									Enter your company's name
									<input
										{...register("businessName", {})}
										placeholder='"Gasthaus Moser"'
									></input>
								</label>
								<p> {errors?.businessName?.message}</p>
								<label>
									Enter your company's business tax nr. for the invoice.
									<input
										{...register("businessTaxNr", {})}
										placeholder='"3012034567890"'
									></input>
								</label>
								<p> {errors?.businessTaxNr?.message}</p>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</form>
		</div>
	);
};
