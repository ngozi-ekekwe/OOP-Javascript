import Car from '../classes/car.js';
import Drone from '../classes/drone.js';

import { DataError } from './data-error.js'

export class FleetDataService {
  constructor(){
    this.cars = [];
    this.errors=[];
    this.drones = [];
  }

  loadData(fleet) {
    for(let data of fleet) {
      switch(data.type) {
        case 'car':
        if(this.validateCarData(data)) {
          let car = this.loadCar(data);
          if (car) this.cars.push(car);
        } 
        else {
          let e = new DataError('Invalid car data', data);
          this.errors.push(e);
        }
          break;
        case 'drone':
          let drone = this.loadDrone(data)
          this.drones.push(drone);
          break;
        default: data
          break;
      }
    }
  }

  loadCar(car) {
    try {
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c
    }catch(e) {
      this.errors.push(new DataError('Error loading car', car))
    }
  }

  loadDrone(drone) {
    let d = new Drone(drone.license, drone.model, drone.latLong);
    d.airTimeHours = drone.airTimeHours;
    d.base = drone.base;
    return d;
  }

  validateCarData(car) {
    let requiredProps = 'license model latLong miles make'.split(' ');
    let hasErrors = false;
    for (let field of requiredProps) {
      if(!car[field]) {
        this.errors.push(`Missing field ${field}`, car)
        hasErrors = true
      }
    }

    if (Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push('Invalid mileage', car)
      hasErrors = true;
    }

    return !hasErrors;

  }
}