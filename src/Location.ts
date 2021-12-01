import {ILocation, TypeLocation} from "./types";

export class Location implements ILocation {
    location: TypeLocation

    getTitle(): string {
        return 'Lat: ' + this.location.latitude + ' Long: ' + this.location.longitude;
    }
}
