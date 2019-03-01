import Car from './classes/car.js';
import Drone   from './classes/drone.js';

import { FleetDataService } from './services/fleet-data-service.js';
import { fleet } from './fleet-data.js'

let dataService = new FleetDataService();
dataService.loadData(fleet);

let car = dataService.getCarByLicense('AKC123')
let cars = dataService.getCarsSortedByLicense();

// console.log(cars)

for (let car of cars) {
  console.log(car.license)
}

// console.log(car)