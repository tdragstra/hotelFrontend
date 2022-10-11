import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { useForm } from "react-hook-form";
import { addUserInfo } from "../../store/hotel/slice";

export const ReservationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			age: "",
		},
	});

	console.log(errors);
	const dispatch = useDispatch();
	const [number, setNumber] = useState();

	return (
		<div>
			<h1> Enter your details</h1>
			<form
				onSubmit={handleSubmit((data) => {
					console.log(data);
					dispatch(addUserInfo(data));
				})}
			>
				<label>
					Enter your first name:
					<input
						{...register("firstName", { required: "First name is required" })}
						placeholder="first name"
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
					Enter an optional address line like building or department.
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
						// type="number"
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
				<p> {errors?.houseNumber2?.message}</p>
				<input type="submit"></input>
			</form>
		</div>
	);
};
