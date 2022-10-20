import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import "./index.css";
//just some mock data, but remember you'll always need latitude and longitude

//Step 1. https://leafletjs.com/examples/quick-start/
//Step 2. https://react-leaflet.js.org/docs/start-setup/

const position = [47.61350550138727, 7.6125007288348785];

export default function Leaflet() {
	return (
		<MapContainer
			center={[47.61350550138727, 7.6125007288348785]}
			zoom={15}
			scrollWheelZoom={false}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={position}>
				<Popup>
					Hotel Moser. <br /> Come visit!
				</Popup>
			</Marker>
		</MapContainer>
	);
}
