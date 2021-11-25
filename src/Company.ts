import faker from "faker";

export class Company {

    name: string;
    catchPhrase: string;
    location: {
        longitude: number,
        latitude: number
    }

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            longitude: parseFloat(faker.address.longitude()),
            latitude: parseFloat(faker.address.latitude())

        }
    }
}
