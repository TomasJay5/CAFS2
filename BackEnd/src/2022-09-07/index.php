<?php

require_once __DIR__ ."/User.php";
require_once __DIR__ ."/Student.php";

$student = new Student("John", "Smith", 30, "Fulbright Scholarship", 1);

var_dump($student);