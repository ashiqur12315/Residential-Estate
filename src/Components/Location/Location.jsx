
import { useRef, useState } from "react";
import { MapContainer, TileLayer} from "react-leaflet"
import osm from '../../osm-provider'
import "leaflet/dist/leaflet.css"
import { Helmet } from "react-helmet-async";


const Location = () => {
    const [center, setCenter] = useState({lat: 13.084622, lng: 80.248357});
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <Helmet><title>Our Location</title></Helmet>
            <h2 className="text-center text-4xl font-bold">My Purchased Property Location</h2>
            <div>
                <MapContainer center={center}
                     zoom={ZOOM_LEVEL}
                     ref={mapRef}   
                >
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}></TileLayer>
                </MapContainer>
            </div>

        </div>
    );
};

export default Location;