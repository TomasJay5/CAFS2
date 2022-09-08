<?php

require_once "/var/www/2022-09-08/task1/classes/Vehicle.php";

class Bmw extends Car
{
    function __construct(string $model, int $year)
    {
        parent::__construct("Bmw", $model, $year);
    }
}
