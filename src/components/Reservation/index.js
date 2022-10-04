import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Reservation(props) {
	return (
		<Jumbotron
			style={{
				backgroundColor: props.backgroundColor,
				color: props.color,
			}}
		>
			<h1>Room {props.id} </h1>
			<h3>{props.title}</h3>
			<p>Available sleeps: {props.capacity}</p>
			<p>Single beds: {props.singleBeds ? "yes" : "no"}</p>
			<p> Available: {!props.available ? "no" : "yes"} </p>
		</Jumbotron>
	);
}
