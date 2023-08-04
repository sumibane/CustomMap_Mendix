import { Component, ReactNode, createElement } from "react";
import { CustomMapsContainerProps } from "../typings/CustomMapsProps";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

import "./ui/CustomMaps.css";
import "leaflet/dist/leaflet.css";

interface CustomMapsProps extends CustomMapsContainerProps {}

export default class CustomMaps extends Component<CustomMapsProps> {
    render(): ReactNode {
        const mapLatitude = parseFloat(this.props.staticLatitude);
        const mapLongitude = parseFloat(this.props.staticLongitude);
        const position: LatLngExpression = [mapLatitude, mapLongitude];

        // const markerIcon = new Icon({
        //     iconUrl: require("./assets/marker-icon.png"),
        //     iconSize: [38, 38]
        // });

        return (
            <MapContainer center={position} zoom={13}>
                <TileLayer attribution="© OpenStreetMap" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {this.props.dynamicMarkers.map(newMarkers => {
                    return newMarkers.markersDS?.items?.map(newDS => {
                        let newlat = newMarkers.latitude?.get(newDS).value ?? 0;
                        let newlong = newMarkers.longitude?.get(newDS).value ?? 0;
                        let markerPos: LatLngExpression = [
                            parseFloat(newlat.toString()),
                            parseFloat(newlong.toString())
                        ];
                        return <Marker position={markerPos}></Marker>;
                    });
                })}
            </MapContainer>
        );
    }
}
