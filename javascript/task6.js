// Parašykite funkciją checkNumber, turinčią vieną parametrą, kuri:


	
// Patikrins skaičius nuo 1 iki (begalybės - 1)
	
// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
	
// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
	
// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
	
// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"


// Iškvietus: console.log(checkNumber(15));

// Rezultatas: "Skaičius dalijasi iš 3 ir iš 5".


function checkNumber(number) {

    if (number < 1) {
        
        return "number is too small";
    }

    if (isNaN(number)) {

        return "it is not a number";
    }

    if (number % 3 == 0 && number % 5 == 0) {

        return "number divides from 3 and 5";
    }

    if (number % 3 == 0) {

        return "number divides from 3";
    }

    if (number % 5 == 0) {

        return "number divides from 5";
    }

    else {

        return "number doesnt divide from 3 or 5";
    }
}

       
console.log(checkNumber(15));
console.log(checkNumber(5));
console.log(checkNumber(3));
console.log(checkNumber(14));
