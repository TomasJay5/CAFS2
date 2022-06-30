// Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Products. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category(bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");
		
// patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;
	
// Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
	
// Filtrus, kurie padės vartotojams filtruoti prekes pagal:

// Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
			
//  kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
			
//  arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos
			
//  arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;
			
// Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
		
// Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
	
// Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuuolada").

const ALLOWED_CATEGORIES = ['T-shirts', 'Pants', 'Sweaters', 'Shoes'];

try {
    const shop = new Shop();

    shop.add(new Product(
        'Champion',
        39.95,
        'Shoes',
        'https://pigu.lt/lt/grozis-ir-mada/vyriski-batai-avalyne/sportbaciai/champion-vyriski-kedai-jaunt-melyni?id=52426564'
    ));

    shop.add(new Product(
        'Helly Hansen Bluza Logo Hoodie',
        79.95,
        'Sweaters',
        'https://pigu.lt/lt/dzemperiai-vyrams/helly-hansen-vyriskas-dzemperis-bluza-logo-hoodie?id=26551177'
    ));

    shop.add(new Product(
        'Helly Hansen Crew',
        44.95,
        'T-shirts',
        'https://pigu.lt/lt/vyriski-marskineliai/helly-hansen-vyriski-marskineliai-crew-melyni?id=46843739'
    ));

    shop.add(new Product(
        'Texpak',
        29.95,
        'Pants',
        'https://pigu.lt/lt/vyriski-drabuziai/vyriska-sportine-apranga/vyriskos-sportines-kelnes-texpak-tamsiai-pilkos-907167611?id=43315058'
    ));

    shop.add(new Product(
        'Vytis',
        38,
        'Pants',
        'https://pigu.lt/lt/vyriski-drabuziai/vyriska-sportine-apranga/sportinis-komplektas-vyrams-vytis-pk209546607?id=52312869'
    ));

    // console.log(shop);

    console.log('filterBetweenPrices', shop.filterBetweenPrices(30, 50));
    console.log('orderByPrice ASCENDING', shop.orderByPrice(30, Shop.ORDER_BY_PRICE_ASCENDING));
    console.log('orderByPrice DESCENDING', shop.orderByPrice(40, Shop.ORDER_BY_PRICE_DESCENDING));
    // console.log(shop.orderByPrice(40, 2));
    // console.log(shop.orderByPrice(40, 'asdas'));
    console.log('fiterBySale', shop.fiterBySale());
    console.log('filterByCategory "Pants"', shop.filterByCategory('Pants'));
} catch (err) {
    console.warn(err.message);
}