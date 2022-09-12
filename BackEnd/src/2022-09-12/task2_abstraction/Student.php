<?php

class Student extends Person
{
    public function greet(): string
    {
        return sprintf("Hello, I am student %s", $this->getName());
    }
}
