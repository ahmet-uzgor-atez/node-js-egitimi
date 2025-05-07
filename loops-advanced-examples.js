const cars = [
    {
        modelYear: 1997,
        model: "Şahin",
        Marka: "Tofaş",
        saleCount: 500,
    },
    {
        modelYear: 2005,
        model: "Polo",
        Marka: "Wolksvagen",
        saleCount: 90,
    },
    {
        modelYear: 2010,
        model: "Symboll Full",
        Marka: "Renault",
        saleCount: 210,
    },
    {
        modelYear: 2001,
        model: "Şahin",
        Marka: "Tofaş",
        saleCount: 120,
    }
];
console.log(denme123)

// key-value
// object - map
const satışAdestleri = {};


// array - set
const array1 = ['ahmet', 'mehmet', 'ahmet', 'cemil', 'mehmet', 'ahmet'];
const a = new Set(array1);
console.log('Set listedeki duplike dataları eleyip unique liste getirir', a);
for (let i = 0; i < cars.length; i++) {
    if (satışAdestleri[cars[i].model]) {
        satışAdestleri[cars[i].model] += cars[i].saleCount
    } else {
        satışAdestleri[cars[i].model] = cars[i].saleCount;
    }
};
console.log('For döngü sonucu =>', satışAdestleri);

// return olmadan tüm elemanları gezmemizi sağlar; data dönmez;
cars.forEach((car) => {
    car.model = `${car.model}*`
    console.log('for each sonuçları => ', `${car.model} - ${car.Marka}`);
});

// bir listenin içerisinden istenen koşula uyan tüm verileri döner; datayı manipüle etmez
const filterSonuç = cars.filter((car) => {
    return car.modelYear > 2000
});
console.log('Filter Sonuç =>', filterSonuç);

// bir liste içerisinden koşula uyan ilk veriyi bulup getirir. koşula uyan veriyi bulduktan sonra diğer elemanları kontrol etmez
const findData = cars.find((car) => {
    return car.modelYear > 2000
});
console.log('Find Sonuç =>', findData);

// liste içerisindeki tüm elemanları gezerek yapılan değişiklikleri uygulayıp aynı boyutlu 
const mapSonuç = cars.map((car) => {
    /* return {
        modelYear: car.modelYear,
        model: car.model,
        Marka: car.Marka,
        saleCount: car.saleCount,
        modelMarka: `${car.Marka} - ${car.model}`
    }*/

    return {
        ...car,
        model: `${car.model}-${new Date().getFullYear()}`,
        modelMarka: `${car.Marka} - ${car.model}`
    };
});
console.log('Map Sonuç =>', mapSonuç);


const sortSonuç = cars.sort((a, b) => {
    return a.modelYear - b.modelYear
});

console.log('sortSonuç => ', sortSonuç)
