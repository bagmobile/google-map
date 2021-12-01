export type TypeLocation = {
    longitude: number,
    latitude: number
}
export interface ILocation {
    location: TypeLocation,
    getTitle(): string
}
