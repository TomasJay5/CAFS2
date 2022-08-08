<?php

// // Sukurti masyvą, kuris aprašytų knygos duomenis: title, author, year, genre.
// $book = [
//     'title' => 'The Hunger Games',
//     'author' => 'Suzanne Collins',
//     'year' => 2008,
//     'genre' => 'History',
// ];

// // Sukurti masyvą, kurio elementai būtų masyvai aprašantys knygas. Minimum 3.
// $books = [
//     [
//         'title' => 'The Fault in Our Stars',
//         'author' => 'John Green',
//         'year' => 2012,
//         'genre' => 'Random',
//     ],
//     [
//         'title' => 'The Alchemist',
//         'author' => 'Paulo Coelho',
//         'year' => 2014,
//         'genre' => 'Story-teller',
//     ],
//     [
//         'title' => 'To Kill a Mockingbird',
//         'author' => 'Harper Lee',
//         'year' => 2006,
//         'genre' => 'Drama',
//     ],
// ];

// // Išvesti visus knygų masyvo elementus su var_dump.
// var_dump($books);

// // Išvesti visų visų knygų metų vidurkį.
// $average = array_sum(array_column($books, 'year')) / count($books);

// $average = round($average);

// var_dump($average);

// // Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en.
// // Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
// $weekDays = [
//     'lt' => [
//         1 => 'Pirmadienis',
//         2 => 'Antradienis',
//         3 => 'Treciadienis',
//         4 => 'Ketvirtadienis',
//         5 => 'Penktadienis',
//         6 => 'Sestadienis',
//         7 => 'Sekmadienis',
//     ],
//     'en' => [
//         1 => 'Monday',
//         2 => 'Tuesday',
//         3 => 'Wednesday',
//         4 => 'Thursday',
//         5 => 'Friday',
//         6 => 'Saturday',
//         7 => 'Sunday',
//     ]
// ];

// // Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
// echo $weekDays['lt'][1].'<br>';
// echo $weekDays['en'][3].'<br>';

// // Parodykite dabartinės dienos pavadinimą
// $currentDate = date('N');

// echo 'Today is: '. $weekDays['lt'][$currentDate].'<br>';

// // Sukurkite kintamuosius lang (reikšmės lt arba en) ir parodykite dieną.
// $langlt = 'lt';
// $langen = 'en';

// echo 'Siandien yra: '. $weekDays[$langlt][$currentDate].'<br>';
// echo 'Today is: '. $weekDays[$langen][$currentDate];
?>