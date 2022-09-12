<?php

// Sukurkite abstrakčią klasę Person, kuri priimtų konstruktoriuje vardą ir turetų abstrakų metodą greetings


// Sukurkite klasę Programmer, kuri paveldės Person klasę.

// Sukurkite klasę Student, kuri paveldės Person klasę.

// Sukurkite klasę Teacher, kuri paveldės Person klasę.


// Išveskite sveikinimą, atitinkanti kievienai klasei. Pvz. programuotojas sveikinasi: "Hello world! I'm Kiril", studentas: "Hello, I'm Kiril", o mokytojas: "Hello students, I'm Kiril".

abstract class Person
{

    function __construct(private string $name)
    {
        $this->setName($name);
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }

    abstract public function greet(): string;
}
    