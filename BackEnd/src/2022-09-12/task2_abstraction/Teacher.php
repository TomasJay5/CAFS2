<?php

class Teacher extends Person
{
    public function greet(): string
    {
        return sprintf("Hello students, I am teacher %s", $this->getName());
    }
}
