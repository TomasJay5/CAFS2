<?php
// Parašyti PHP klasę, kuri parašytų “Sveiki, mano vardas yra {vardas}”, kur {vardas} būtų metodo argumento vertė klasės viduje
class user {
    public $name;
  
    function __construct(string $name) {
      $this->name = $name;
    }
    public function Hello() : string 
    {
      return "Hello, my name is " . $this->name;
    }
  }
  $user = new user ("Tomas");
  echo $user->Hello();
