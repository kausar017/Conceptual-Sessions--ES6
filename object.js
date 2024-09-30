//object spreeding

// const myInfo = {
//     name : 'kausar',
//     age : 21,
//     address: 'mymensingh',
//     village : 'Gozikha',
//     contrac: {
//         phone: 1786876781,
//         email: 'mdkousarmia71@gmail.com',
//     },
// };

// const obj2 = {...myInfo};
// obj2.married = false;
// obj2.age = 25;

// console.log(myInfo);
// console.log(obj2);


//object distracturing..

// const {contrac:{phone, email}} = myInfo

// console.log(phone, email);

// const {email} = contrac;

// console.log(email);

const myInfo = {
    name : 'kausar',
    age : 21,
    address: 'mymensingh',
    village : 'Gozikha',
    contrac: {
        phone: 1786876781,
        email: 'mdkousarmia71@gmail.com',
    },
};

//object access dot notation, Bracket notation

// const n = 'name';

// console.log(myInfo[n]);

for(let key in myInfo) {
    console.log(myInfo[key]);
    
}