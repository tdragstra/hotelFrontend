import "./index.css";
import { useDispatch, useSelector } from "react-redux";

import { selectFeatures } from "../../store/admin/selectors";
import { useEffect } from "react";
import { fetchFeatures } from "../../store/admin/actions";
import { Container } from "react-bootstrap";

export default function Features() {
	const features = useSelector(selectFeatures);
	const dispatch = useDispatch();
	console.log(features);

	useEffect(() => {
		dispatch(fetchFeatures());
	}, [dispatch]);

	const chooseIcon = (icon) => {
		if (icon === "location") {
			return "ci-location";
		}
		if (icon === "features") {
			return "ci-star";
		}
		if (icon === "house rules") {
			return "ci-close-circle";
		}
	};
	return (
		<div className="FeaturesDiv">
			<Container className="IconWrapper">
				<div>
					{features.map((f) => {
						return (
							<div className="IconDiv">
								<i
									className={chooseIcon(f.type)}
									style={{ fontSize: "60px" }}
								></i>

								{f.name}
								<p>{f.distanceTo ? f.distanceTo + " KM" : ""}</p>
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
}
