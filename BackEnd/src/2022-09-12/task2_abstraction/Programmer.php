<?php

class Programmer extends Person
{
    public function greet(): string
    {
        return sprintf("Hello world! I am programmer %s", $this->getName());
    }
}
