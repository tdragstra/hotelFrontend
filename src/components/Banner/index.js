import { Carousel } from "react-bootstrap";

function CarouselFadeExample() {
	return (
		<Carousel
			fade
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
				alignItems: "center",
			}}
		>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require("../img/banner.png")}
					alt="First slide"
					style={{
						maxHeight: "70%",
					}}
				/>
				<Carousel.Caption>
					<h1 style={{ color: "white", fontSize: 80 }}>
						Welcome to Weil am Rhein
					</h1>
					<p style={{ color: "white", fontSize: 25 }}>
						Book fast and secure now!
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require("../img/banner.png")}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h1 style={{ color: "white", fontSize: 80 }}>Wilcome!</h1>
					<p style={{ color: "white", fontSize: 25 }}>
						Free 48 hour cancelation
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFadeExample;

{
	/* <Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=Second slide&bg=282c34"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=Third slide&bg=20232a"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item> */
}
