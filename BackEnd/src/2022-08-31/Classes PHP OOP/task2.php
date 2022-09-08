<?php
// Sukurti klasę Person, kuri turėtų atributus vardas, pavarde, amzius ir sukurti tris skirtingus tos klasės objektus
class Person
{
    public $first_name;
    public $last_name;
    public $age;
    function __construct(string $first_name, string $last_name, int $age) {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->age = $age;
    }
}
$firstPerson = new Person('John', 'Smith', 50);
$secondPerson = new Person('Paul', 'Walker', 33);
$thirdPerson = new Person('Ann', 'Fletcher', 46);
