<?php

require_once __DIR__ . "/task2_abstraction/Person.php";
require_once __DIR__ . "/task2_abstraction/Programmer.php";
require_once __DIR__ . "/task2_abstraction/Student.php";
require_once __DIR__ . "/task2_abstraction/Teacher.php";

$programmer = new Programmer("John");

$student = new Student("Bob");

$teacher = new Teacher("Michael");


echo ($programmer->greet());
echo "<br>";
echo ($student->greet());
echo "<br>";
echo ($teacher->greet());
