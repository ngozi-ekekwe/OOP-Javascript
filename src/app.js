import Car from './classes/car.js';
import Drone   from './classes/drone.js';

import { FleetDataService } from './services/fleet-data-service.js';
import { fleet } from './fleet-data.js'

let c = new Car();
let d = new Drone();

let dataService = new FleetDataService();
dataService.loadData(fleet)

console.log(dataService.errors)
console.log(dataService.cars)
console.log(dataService.drones)

// console.log(c, d)

for(let c of dataService.cars) {
  console.log(c.license)
}