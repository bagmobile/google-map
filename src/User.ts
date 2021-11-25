import faker from "faker";

export class User {

    name: string;

    location: {
        longitude: number,
        latitude: number
    }

    constructor() {
        this.name = faker.name.findName();
        this.location = {
            longitude: parseFloat(faker.address.longitude()),
            latitude: parseFloat(faker.address.latitude())

        }
    }
}
