<?php

require_once __DIR__ . "/task1/classes/Vehicle.php";
require_once __DIR__ . "/task1/classes/Boat.php";
require_once __DIR__ . "/task1/classes/Bus.php";
// require_once __DIR__ . "/task1/classes/Car.php";
// require_once __DIR__ . "/task1/classes/Motorcycle.php";
// require_once __DIR__ . "/task1/classes/Plane.php";
// require_once __DIR__ . "/task1/classes/Cars/Bmw.php";


$boat = new Boat("Aviara", "AV40", 2020);
$bus = new Bus("MAN Truck & Bus SE", "Neoplan Cityliner", 2021, 6);
// $car = new Car("Audi", "A4", 2016);
// $motorcycle = new Motorcycle("BMW", "S10000RR", 2020, 2);
// $plane = new Plane("Boeing", "737", 1967, 6);
// $bmw = new Bmw("330", 2016);

var_dump($boat, $boat->getIntroduction(), $boat->getAge(), $boat->getAgeText(), $boat->getWheelsNumberText(), $boat->getFuelType());
var_dump($bus, $bus->getIntroduction(), $bus->getAge(), $bus->getAgeText(), $bus->getWheelsNumberText(), $bus->getFuelType());
// var_dump($car, $car->getIntroduction(), $car->getAge(), $car->getAgeText(), $car->getWheelsNumberText(), $car->getFuelType());
// var_dump($motorcycle, $motorcycle->getIntroduction(), $motorcycle->getAge(), $motorcycle->getAgeText(), $motorcycle->getWheelsNumberText(), $motorcycle->getFuelType());
// var_dump($plane, $plane->getIntroduction(), $plane->getAge(), $plane->getAgeText(), $plane->getWheelsNumberText(), $plane->getFuelType());
// var_dump($bmw, $bmw->getIntroduction(), $bmw->getAge(), $bmw->getAgeText(), $bmw->getWheelsNumberText(), $bmw->getFuelType());
