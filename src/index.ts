import {User} from "./User";

const user = new User();
console.log(google);


let map: google.maps.Map<HTMLElement>;
map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
});
