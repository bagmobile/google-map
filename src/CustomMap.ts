import {ILocation} from "./types";
import Marker = google.maps.Marker;

export class CustomMap {

    private readonly googleMap: google.maps.Map;

    constructor(map: HTMLElement) {
        this.googleMap = new google.maps.Map(map, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
        });
    }

    private createMarker(content?: string): google.maps.Marker {

        const marker = new google.maps.Marker({
            map: this.googleMap
        });
        if (content){
            const infoWindow = new google.maps.InfoWindow({content});
            marker.addListener('click', () => {
                infoWindow.open(this.googleMap, marker);
            })
        }
        return marker;
    }

    addMarker(obj: ILocation): void {
        const lngLat = new google.maps.LatLng(obj.location.latitude, obj.location.longitude);
        this.createMarker(obj.getTitle()).setPosition(lngLat);
    }

    fitBounds(l1: ILocation, l2: ILocation) {
        const sw = new google.maps.LatLng(l1.location.latitude, l1.location.longitude);
        const ne = new google.maps.LatLng(l2.location.latitude, l2.location.longitude);
        this.googleMap.fitBounds(new google.maps.LatLngBounds(sw, ne));
    }
}
