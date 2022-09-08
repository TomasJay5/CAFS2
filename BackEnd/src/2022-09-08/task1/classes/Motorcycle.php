<?php

require_once __DIR__ . "/Vehicle.php";

class Motorcycle extends Vehicle
{
    function __construct(string $make, string $model, int $year, int $wheels)
    {
        parent::__construct($make, $model, $year);
        $this->wheels = $wheels;
    }

    public function getFuelType(): array
    {
        return [1, 2];
    }
}
