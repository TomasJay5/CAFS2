// Naudodami NodeJS parodykite procesoriaus pavadinimą ir jame esančių branduolių skaičių

// const os = require('os');

// const systemCpuCores = os.cpus();

// console.log(systemCpuCores);

//// Parašykite NodeJS programą, kuri iš komandinės eilutės priims 2 parametrus:

 

//// 1) failo pavadinimas
//// 2) failo turinys

 

//// O tada sukurs tokį failą ir įdės ten turinį.


const readline = require('readline');

const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Create new file:', (fileName) => {
    rl.question('Write file content:', (fileContent) => {
        fs.writeFile((fileName), (fileContent), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
        rl.close();
    })
});