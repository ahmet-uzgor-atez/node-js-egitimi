// Primitive types => string , number, boolean, Symbol

const fullName = 'ahmet uzgor';
const age = 28;
const address = 'eyup yıldıztabya';

const sonuç = fullName.toUpperCase() + ' yaşı' + age + ' adresi' + address;

const ageData = '28';


console.log(sonuç, parseInt(ageData));


// Reference Types => array, Map, Set object, function, class, 
const arr1 = [1, 'deneme', true];
const doubleArr1 = [['name', 'surnmae'], [1, 2]];

console.log(arr1[0])
console.log(doubleArr1[0][0]);

// built-in methods
arr1.push(2);
arr1.pop();
arr1[1] = 'mesut'

const arr3 = [1];
const arr2 = [1];

console.log(arr3[0] === arr2[0])


// object;

// JSON => json javascript object notation
// key-value , key unique

const user = {
    name: "ahmet",
    password: "1234",
    surname: "uzgor",
    highschool: "GOP Anadolu",
    cars: [
        "mercedes",
        "fiat"
    ]
};
// orm
knex.insert(user)

// orm => object relational mapping;

const users = [
    {
        name:  "mesut",
        surname: "gümüş",
        permission: [
            {
                type: 'b_RAPOR',
                status: true
            },
            {
                type: 'B_RAPOR',
                status: false
            },
        ]
    },
    {
        name: 'ahmet',
        surname: "uzgor",
        permission: [
            {
                type: 'A_RAPOR',
                status: true
            },
            {
                type: 'B_RAPOR',
                status: true
            },
        ]
    }
];

// functions ; function - arrow function

const numbers = [1, 8, 3, 5, 12, 34, 22];
const avg1 = calculateAverage(numbers)
console.log('Yöntem 1 => Ortalama =', avg1)


function calculateAverage({numbers1, numbers2}) {
    // .length array in eleman sayısını
    // (numbers[0] + numbers[1])/a.length

    // döngüler - loops for - while (do-while)

    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        // sum = sum + numbers[index]
        sum += numbers[index]
    }
    
    return sum/numbers.length
};

const calcAvg = (numbers) => {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        // sum = sum + numbers[index]
        sum += numbers[index]
    }
    
    return sum/numbers.length
}

const avg2 = calcAvg({numbers1: [], numbers: []});
console.log(`Yöntem 2 => Ortalama = ${avg2}`)


// döngüler - loops for - while (do-while)

const bestenBuyukSayilar = [];
const bestenKucukSayilar = [];

numbers.forEach((item) => {
    if (item > 5) {
        bestenBuyukSayilar.push(item)
    } else {
        bestenKucukSayilar.push(item)
    }
});

console.log(bestenBuyukSayilar);
console.log(bestenKucukSayilar);

console.log('Filter methodu ', numbers.filter((item) => {
    return item > 5
}));

const fullNames = users.map((user) => {
    return `${user.name} ${user.surname}`
});

console.log(fullNames);


