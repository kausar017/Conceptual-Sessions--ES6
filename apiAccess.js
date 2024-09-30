const  parson = [
{
    id: 5456,
    name: 'kausar',
    age: 40,
    occupation: 'Web Devolopar',
    contrac: {
        email: 'mdkousarmia71@gmail.com',
    },
    address: {
        vligge: 'Gozikha',
        city: 'mymensing',
        zip: 1110,
    },

},
{
    id: 646,
    name: 'afrin',
    age: 20,
    occupation: 'Web Devolopar',
    contrac: {
        email: 'mdkousarmia100@gmail.com',
    },
    address: {
        vligge: 'mohammodpur',
        // city: 'dhaka',
        zip: 2270,
    },

},
{
    id: 64654,
    name: 'rani',
    age: 20,
    occupation: 'Web Devolopar',
    contrac: {
        email: 'mdkousarmia500@gmail.com',
    },
    address: {
        vligge: 'balluka',
        city: 'mymenisngh',
        zip: 5000,
    },

},
];

// parson.map((parson) => {
//     const sentence = `parson.s name is ${parson.name}. city ${parson?.address?.city ||  "N/A"}`;
//     console.log(sentence);
    
// });

const x = parson.find((p) => p.age == 40);
console.log(x.name);
