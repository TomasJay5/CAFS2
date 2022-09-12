<?php

class Programmer extends Person
{

    function __construct(string $name)
    {
        parent::__construct($name);
    }

    public function greet(): string
    {
        return sprintf("Hello world! I am programmer %s", $this->getName());
    }
}
