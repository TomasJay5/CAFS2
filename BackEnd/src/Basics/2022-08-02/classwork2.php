<?php

// Parašykite kodą kuris skaičiuoja sekundžių skaičių per dieną/parą (24h) ir parodo rezultatą ekrane.

// $secondsperday = 24*60*60;

// echo "There are {$secondsperday} seconds per day"; 



// // Sukurkite "a", "b", "c" masyvą. Išveskite masyvo reikšmę naudodami funkciją var_dump().

// // Naudodamiesi $arr masyvu iš ankstesnės užduoties, išveskite pirmo, antro ir trečio elementų turinį.

// // Sukurkite masyvą $arr = ['a', 'b', 'c', 'd'] ir panaudoja jį išveskite eilutė 'a + b, c + d'.

// // Sukurkite $arr masyvą su elementais 2, 5, 3, 9. Padauginkite pirmąjį masyvo elementą iš antrojo, o trečiąjį elementą iš ketvirtojo. Sudėkite rezultatus ir priskirkite kintamajam $result. Išveskite šio kintamojo reikšmę.

// // Užpildykite $arr masyvą skaičiais nuo 1 iki 5. Nedeklaruokite masyvo elementų, o tiesiog užpildykite jį $arr[] = nauja reikšme.

// $arr = ['a', 'b', 'c'];

// var_dump($arr);

// echo "{$arr[0]}, {$arr[1]}, {$arr[2]}\n";

// $arr = ['a', 'b', 'c', 'd'];

// echo "{$arr[0]} + {$arr[1]}, {$arr[2]} + {$arr[3]}\n";

// $arr = [2, 5, 3, 9];

// $result = ($arr[0] * $arr[1]) + ($arr[2] * $arr[3]);

// echo "{$result}\n";

// $arr = range (1,5);

// var_dump($arr);


// // Parašykite funkciją, kuri grąžina skaičiaus kvadratą. Skaičius perduodamas kaip parametras.

// function numSquare($num)
// {
//     return ($num * $num);
// }

// echo numSquare(5);


// // Parašykite funkciją, kuri grąžina dviejų skaičių sumą. Skaičiai perduodami funkcijos parametrus.

// function numberSum($num1, $num2)
// {
//     return ($num1 + $num2);
// }

// echo numberSum(2, 5);

// // Parašykite funkciją, kuri iš antro parametro atima pirmą ir padalija iš trečio.

// function numberMath($num1, $num2, $num3)
// {
//     return (($num2 - $num1) / $num3);
// }

// echo numberMath(4, 20, 2);

// // Parašykite funkciją, kuri priima kaip parametrą skaičių nuo 1 iki 7, o grąžina savaitės dieną lietuvių kalba.

// function getWeekDay($num)
// {
//     $weekDays = ["Pirmadienis", "Antradienis", "Treciadienis", "Ketvirtadienis", "Penktadienis", "Sestadienis", "Sekmadienis"];
//     if ($num >= 1 && $num <= 7)
//         return $weekDays[$num - 1];
// }

// var_dump(getWeekDay(2));

// // "Nupieškite" tokio tipo piramidę ekrane dviem skirtingais ciklais:

// // 1
// // 22
// // 333
// // 4444
// // 55555
// // 666666
// // 7777777
// // 88888888
// // 999999999

// for ($i = 1; $i <= 9; $i++) {
//     for ($a = 1; $a <= $i; $a++) {
//         echo $i;
//     }
//     echo "<br/>";
// }

// $i = 1;
// while ($i < 9) {

//     $a = 1;
//     while ($a <= $i) {
//         echo $i;
//         ++$a;

//     }
//     echo "<br/>";
//     $i++;
// }

?>