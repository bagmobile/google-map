import faker from "faker";
import {Location} from "./Location";

export class Company extends Location {

    name: string;
    catchPhrase: string;

    constructor() {
        super();
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            longitude: parseFloat(faker.address.longitude(46, 44)),
            latitude: parseFloat(faker.address.latitude(47, 44))

        }
    }

    getTitle(): string {
        return this.name + this.catchPhrase
    }
}
