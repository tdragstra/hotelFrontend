import React from "react";
import { Link } from "react-router-dom";

export default function Steps() {
	return (
		<div class="steps steps-dark">
			<Link to="#" class="step-item active current">
				<div class="step-progress">
					<span class="step-count">1</span>
				</div>
				<div class="step-label">
					<i class="ci-cart"></i>
					Book your room
				</div>
			</Link>

			<Link to="#" class="step-item ">
				<div class="step-progress">
					<span class="step-count">2</span>
				</div>
				<div class="step-label">
					<i class="ci-user-circle"></i>
					Your details
				</div>
			</Link>

			<Link to="#" class="step-item">
				<div class="step-progress">
					<span class="step-count">3</span>
				</div>
				<div class="step-label">
					<i class="ci-package"></i>
					Last step
				</div>
			</Link>

			<div></div>
		</div>
	);
}
