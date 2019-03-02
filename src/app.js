import Car from './classes/car.js';
import Drone   from './classes/drone.js';

import { FleetDataService } from './services/fleet-data-service.js';
import { fleet } from './fleet-data.js'
import { Button } from './ui/button.js';

let b = new Button('Click me');

// console.log(b)

b.appendToElement($('body'))
