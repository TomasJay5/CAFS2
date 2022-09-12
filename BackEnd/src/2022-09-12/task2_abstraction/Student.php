<?php

class Student extends Person
{

    function __construct(string $name)
    {
        parent::__construct($name);
    }

    public function greet(): string
    {
        return sprintf("Hello, I am student %s", $this->getName());
    }
}
