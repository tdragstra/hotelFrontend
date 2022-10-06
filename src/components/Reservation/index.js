import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Reservation(props) {
	return (
		<tr>
			<th scope="row">
				<h5> {props.title} </h5>
				<br />
				{props.capacity === 2 ? (
					<div>
						<input type="radio" value="Double" name="beds" /> 1 x King bed{" "}
						<input type="radio" value="Single" name="beds" /> 2 x Single beds{" "}
					</div>
				) : (
					""
				)}
				<br />
				Features:
				<br />
				{props.size}m2
				<p>
					{props.option.map((e) => (
						<>
							- <i class="ci-key"></i> {e.name}
						</>
					))}
				</p>
			</th>
			<td>{props.capacityF(props.capacity)}</td>
			<td>
				€ {props.price} <br />
				<p style={{ fontSize: "10px" }}> Includes taxes and fees </p>
			</td>
			<td>Free cancelation until 23:59 on {props.freeCancel}</td>
			<td>
				<div class="input-group">
					<span class="input-group-text fw-medium">
						<i class="ci-key"></i>
					</span>
					<select class="form-select">
						<option>0 </option>
						<option>1, &nbsp;(€{props.price})</option>
						<option>2, &nbsp;(€{props.price * 2})</option>
						<option>3, &nbsp;(€{props.price * 3})</option>
					</select>
				</div>
			</td>
		</tr>
	);
}
