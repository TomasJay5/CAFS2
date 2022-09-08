<?php 

class User {

    public $firstname;
    public $lastname;
    public $age;

    public function __construct(string $firstname, string $lastname, int $age)
    {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->age = $age;
    }
}