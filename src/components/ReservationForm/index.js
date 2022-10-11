import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { useForm } from "react-hook-form";

export const ReservationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			age: "",
		},
	});

	console.log(errors);
	const dispatch = useDispatch;
	const [number, setNumber] = useState();

	return (
		<div>
			<h1> Enter your details</h1>
			<form
				onSubmit={handleSubmit((data) => {
					console.log(data);
				})}
			>
				<label>
					Enter your name:
					<input
						{...register("name", { required: "First name is required" })}
						placeholder="first name"
					/>
				</label>
				<p> {errors?.name?.message}</p>
				<label>
					Enter your age
					<input
						{...register("age", {
							valueAsNumber: true,
							min: 18,
							required: "Age is required",
						})}
						type="number"
						placeholder="age"
						min="18"
						// value={number}
						// onChange={(e) => setNumber(e.target.value)}
					></input>
					<p> {errors?.age?.message}</p>
				</label>

				<input type="submit"></input>
			</form>
		</div>
	);
};
