import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<div class="bg-dark pt-5">
			<div class="container">
				<div class="row pb-2">
					<div class="col-md-4 col-sm-6">
						<div class="widget widget-links widget-light pb-2 mb-4">
							<h3 class="widget-title text-light">Shop departments</h3>
							<ul class="widget-list">
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Sneakers & Athletic
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Athletic Apparel
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Sandals
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Jeans
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Shirts & Tops
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Shorts
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										T-Shirts
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Swimwear
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Clogs & Mules
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Bags & Wallets
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Accessories
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Sunglasses & Eyewear
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Watches
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-4 col-sm-6">
						<div class="widget widget-links widget-light pb-2 mb-4">
							<h3 class="widget-title text-light">Account & shipping info</h3>
							<ul class="widget-list">
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Your account
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Shipping rates & policies
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Refunds & replacements
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Order tracking
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Delivery info
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
										About company
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Our team
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										Careers
									</Link>
								</li>
								<li class="widget-list-item">
									<Link to="#" class="widget-list-link">
										News
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-4">
						<div class="widget pb-2 mb-4">
							<h3 class="widget-title text-light pb-1">Stay informed</h3>

							<div class="form-text text-light opacity-50">
								*Subscribe to our newsletter to receive early discount offers,
								updates and new products info.
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
										Fast and free delivery
									</h6>
									<p class="mb-0 fs-ms text-light opacity-50">
										Free delivery for all orders over $200
									</p>
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
										We return money within 30 days
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
									<h6 class="fs-base text-light mb-1">24/7 customer support</h6>
									<p class="mb-0 fs-ms text-light opacity-50">
										Friendly 24/7 customer support
									</p>
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
										We possess SSL / Secure сertificate
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div class="row pb-2">
						<div class="col-md-6 text-center text-md-start mb-4">
							<div class="text-nowrap mb-4">
								<Link class="d-inline-block align-middle mt-n1 me-3" to="#">
									<img
										class="d-block"
										width="117"
										src="path-to-logo"
										alt="Cartzilla"
									/>
								</Link>
								<div class="btn-group dropdown disable-autohide">
									<button
										class="btn btn-outline-light border-light btn-sm dropdown-toggle px-2"
										type="button"
										data-bs-toggle="dropdown"
									>
										<img
											class="me-2"
											width="20"
											src="path-to-image"
											alt="English"
										/>
										Eng / $
									</button>
									<ul class="dropdown-menu my-1">
										<li class="dropdown-item">
											<select class="form-select form-select-sm">
												<option value="usd">$ USD</option>
												<option value="eur">€ EUR</option>
												<option value="ukp">£ UKP</option>
												<option value="jpy">¥ JPY</option>
											</select>
										</li>
										<li>
											<Link class="dropdown-item pb-1" to="#">
												<img
													class="me-2"
													width="20"
													src="path-to-image"
													alt="Français"
												/>
												Français
											</Link>
										</li>
										<li>
											<Link class="dropdown-item pb-1" to="#">
												<img
													class="me-2"
													width="20"
													src="path-to-image"
													alt="Deutsch"
												/>
												Deutsch
											</Link>
										</li>
										<li>
											<Link class="dropdown-item" to="#">
												<img
													class="me-2"
													width="20"
													src="path-to-image"
													alt="Italiano"
												/>
												Italiano
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div class="widget widget-links widget-light">
								<ul class="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
									<li class="widget-list-item me-4">
										<Link to="#" class="widget-list-link">
											Outlets
										</Link>
									</li>
									<li class="widget-list-item me-4">
										<Link to="#" class="widget-list-link">
											Affiliates
										</Link>
									</li>
									<li class="widget-list-item me-4">
										<Link to="#" class="widget-list-link">
											Support
										</Link>
									</li>
									<li class="widget-list-item me-4">
										<Link to="#" class="widget-list-link">
											Privacy
										</Link>
									</li>
									<li class=" widget-list-itemme-4">
										<Link to="#" class="widget-list-link">
											Terms of use
										</Link>
									</li>
								</ul>
							</div>
						</div>
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
							<img
								class="d-inline-block"
								width="187"
								src="path-to-image"
								alt="Payment methods"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
