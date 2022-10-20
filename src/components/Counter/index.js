import {
	incrementA,
	decrementA,
	incrementC,
	decrementC,
} from "../../store/hotel/slice";
import {
	selectAdults,
	selectChildren,
	selectTotalGuests,
} from "../../store/hotel/selectors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlusSquareFill, BsFileMinusFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import "./counter.css";

export const Counter = () => {
	const adults = useSelector(selectAdults);
	const children = useSelector(selectChildren);
	const numberOfGuests = useSelector(selectTotalGuests);
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);
	return (
		<div>
			<Button onClick={() => setEdit(!edit)}>
				<i class="ci-user"> </i> {numberOfGuests} Guest(s), add guest {""}
				<i class="ci-add-circle"></i>
			</Button>
			{edit ? (
				<>
					<div className="Counter1">
						<div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
								}}
							>
								<p>Adults (18+)</p>

								<BsFileMinusFill
									onClick={() => dispatch(decrementA())}
									style={{ fontSize: 30 }}
								/>

								<span style={{ fontSize: 20 }}>{adults}</span>
								<BsFillPlusSquareFill
									onClick={() => dispatch(incrementA())}
									style={{ fontSize: 30 }}
								/>
							</div>
						</div>

						<div className="Counter">
							<div
								style={{
									display: "flex",
									flexDirection: "row",
								}}
							>
								<p> Children: </p>
								<BsFileMinusFill
									aria-label="Decrement value"
									onClick={() => dispatch(decrementC())}
									style={{ fontSize: 30 }}
								/>
								<span style={{ fontSize: 20 }}> {children} </span>
								<span></span>
								<BsFillPlusSquareFill
									class="ci-arrow-right-circle"
									aria-label="Decrement value"
									onClick={() => dispatch(incrementC())}
									style={{ fontSize: 30 }}
								/>
								<span></span>
							</div>
						</div>
						<Button className="Close" onClick={() => setEdit(!edit)}>
							{() => {
								setEdit(false);
							}}
							X
						</Button>
					</div>
				</>
			) : (
				<div style={{ width: "100%" }}></div>
			)}
		</div>
	);
};
