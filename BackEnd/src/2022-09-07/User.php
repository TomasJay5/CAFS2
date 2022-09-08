<?php

class User
{

    protected $firstname;
    protected $lastname;
    protected $age;

    public function __construct(string $firstname, string $lastname, int $age)
    {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->age = $age;
    }
}
