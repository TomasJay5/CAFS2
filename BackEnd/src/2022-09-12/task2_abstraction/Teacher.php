<?php

class Teacher extends Person
{

    function __construct(string $name)
    {
        parent::__construct($name);
    }

    public function greet(): string
    {
        return sprintf("Hello students, I am teacher %s", $this->getName());
    }
}
