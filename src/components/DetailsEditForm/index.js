import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./index.css";
import { selectReservations } from "../../store/admin/selectors";

import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { width } from "@mui/system";

export const DetailsEditForm = (props) => {
	const reservation = useSelector(selectReservations);
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);
	return (
		<div>
			<Button style={{ width: "450px" }} onClick={() => setEdit(!edit)}>
				Edit booker's information
			</Button>
			{edit ? (
				<>
					<div>
						<div>
							First name :
							<EditText
								showEditButton
								name={"firstName"}
								defaultValue={props.firstName}
							/>
							Last name :
							<EditText
								showEditButton
								name={"lastName"}
								defaultValue={props.lastName}
							/>
							Address :
							<EditText
								showEditButton
								name="address1"
								defaultValue={props.address1}
							/>
							House number :
							<EditText
								showEditButton
								name="houseNumber"
								defaultValue={props.houseNumber}
							/>
							E-Mail address :
							<EditText
								showEditButton
								name="emailAddress"
								defaultValue={props.emailAddress}
							/>
						</div>
					</div>
				</>
			) : (
				<div style={{ width: "100%" }}></div>
			)}
		</div>
	);
};
