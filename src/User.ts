import faker from "faker";
import {Location} from "./Location";

export class User extends Location {

    name: string;

    constructor() {
        super();
        this.name = faker.name.findName();
        this.location = {
            longitude: parseFloat(faker.address.longitude(45, 43)),
            latitude: parseFloat(faker.address.latitude(48, 42))
        }
    }
}
