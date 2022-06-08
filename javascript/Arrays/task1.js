// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
	
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
	
// Viduryje esančią reikšmę pakeiskite „Classics“.
	
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
	
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.

const styles = [
    'Jazz', 
    'Blues'
];

console.log(styles);

styles.push ('Rock-n-Roll');

console.log(styles);

styles[1] = 'Classics';

console.log(styles);

console.log(styles.shift());

console.log(styles);

styles.unshift('Rap', 'Reggae');

console.log(styles);