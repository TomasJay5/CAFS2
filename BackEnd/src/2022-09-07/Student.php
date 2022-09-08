<?php

// Sukurkite klasę Student, kuri paveldės User klasę ir įneš papildomas viešai neprienamas savybes: stipendija ir kursas bei jiems reikalingus metodus

class Student extends User 
{
    private $scholarship;
    private $course;
    
    public function __construct(string $firstname, string $lastname, int $age, string $scholarship, int $course)
    {
        parent::__construct($firstname, $lastname, $age);
        $this->scholarship = $scholarship;
        $this->course = $course;
    } 

    public function showScholarship() : string
    {
        return $this->scholarship;
    }

    public function showCourse() : int
    {
        return $this->course;
    }

    public function setScholarship (string $scholarship)
    {
        $this->scholarship = $scholarship;
    }

    public function setCourse (int $course)
    {
        $this->course = $course;
    }
}