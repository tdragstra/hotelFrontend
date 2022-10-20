import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<div class="bg-dark pt-5">
			<div class="container">
				<div class="row pb-2">
					<div class="col-md-4 col-sm-6">
						<div class="widget widget-links widget-light pb-2 mb-4">
							<h3 class="widget-title text-light">Account & Hotel info</h3>
							<ul class="widget-list">
								<li class="widget-list-item">
									<Link to="/login" class="widget-list-link">
										Your reservation
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Terms and Privacy Policy
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Cancelation and Refunds
									</Link>
								</li>

								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Taxes & fees
									</Link>
								</li>
							</ul>
						</div>
						<div class="widget widget-links widget-light pb-2 mb-4">
							<h3 class="widget-title">About us</h3>
							<ul class="widget-list">
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										About Hotel Moser
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Our team
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-4">
						<div class="widget pb-2 mb-4">
							<h3 class="widget-title text-light pb-1">Stay informed</h3>

							<div class="form-text text-light opacity-70">
								Follow us on Facebook and check our website for the best offers.
							</div>
						</div>
						<div class="widget pb-2 mb-4">
							<h3 class="widget-title text-light pb-1">Download our app</h3>
							<div class="d-flex flex-wrap">
								<div class="me-2 mb-2">
									<Link class="btn-market btn-apple" to="#" role="button">
										<span class="btn-market-subtitle">Download on the</span>
										<span class="btn-market-title">App Store</span>
									</Link>
								</div>
								<div class="mb-2">
									<Link class="btn-market btn-google" to="#" role="button">
										<span class="btn-market-subtitle">Download on the</span>
										<span class="btn-market-title">Google Play</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt-5 bg-darker">
				<div class="container">
					<div class="row pb-3">
						<div class="col-md-3 col-sm-6 mb-4">
							<div class="d-flex">
								<i
									class="ci-rocket text-primary"
									style={{ fontSize: "2.25rem" }}
								></i>
								<div class="ps-3">
									<h6 class="fs-base text-light mb-1">
										Fast and secure booking
									</h6>
									<p class="mb-0 fs-ms text-light opacity-50">No extra costs</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 mb-4">
							<div class="d-flex">
								<i
									class="ci-currency-exchange text-primary"
									style={{ fontSize: "2.25rem" }}
								></i>
								<div class="ps-3">
									<h6 class="fs-base text-light mb-1">Money back guarantee</h6>
									<p class="mb-0 fs-ms text-light opacity-50">
										48-Hour 100% Free Cancelelation
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 mb-4">
							<div class="d-flex">
								<i
									class="ci-support text-primary"
									style={{ fontSize: "2.25rem" }}
								></i>
								<div class="ps-3">
									<h6 class="fs-base text-light mb-1">
										Customer support by phone
									</h6>
									<p class="mb-0 fs-ms text-light opacity-50">Just call us</p>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 mb-4">
							<div class="d-flex">
								<i
									class="ci-card text-primary"
									style={{ fontSize: "2.25rem" }}
								></i>
								<div class="ps-3">
									<h6 class="fs-base text-light mb-1">Secure online payment</h6>
									<p class="mb-0 fs-ms text-light opacity-50">
										We use a trusted and secure PSP
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div class="row pb-2">
						<div class="col-md-6 text-center text-md-start mb-4"></div>
						<div class="col-md-6 text-center text-md-end mb-4">
							<div class="mb-3">
								<Link class="btn-social bs-light bs-twitter ms-2 mb-2" to="#">
									<i class="ci-twitter"></i>
								</Link>
								<Link class="btn-social bs-light bs-facebook ms-2 mb-2" to="#">
									<i class="ci-facebook"></i>
								</Link>
								<Link class="btn-social bs-light bs-instagram ms-2 mb-2" to="#">
									<i class="ci-instagram"></i>
								</Link>
								<Link class="btn-social bs-light bs-pinterest ms-2 mb-2" to="#">
									<i class="ci-pinterest"></i>
								</Link>
								<Link class="btn-social bs-light bs-youtube ms-2 mb-2" to="#">
									<i class="ci-youtube"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
