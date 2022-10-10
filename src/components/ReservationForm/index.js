import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
export const ReservationForm = () => {
	const dispatch = useDispatch;
	const [name, setName] = useState();

	return (
		<div>
			<h1> Enter your details</h1>
		</div>
	);
};
