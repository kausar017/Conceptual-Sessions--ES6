// const name = 'kausar mia';
// const age = 21;
// const education = 'Diploma';

// const sentens1 = `my name is ${name}. my age ${age}. my educational qualification ${education}`;
// console.log(sentens1);



const myInfo = {
    name : 'kausar',
    age : 21,
    address: 'mymensingh',
    village : 'Gozikha',
    contrac: {
        phone: 1786876781,
        email: 'mdkousarmia71@gmail.com',
    },
    subject: ['bangla', 'english', 'math']
};

const sentence = `my name is ${myInfo.name} my favarite subjects ${myInfo.subject.map((sub) => sub).join('=>')}`

console.log(sentence);
