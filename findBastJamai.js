const pulapan = [
    {name: 'Abul', job: 'sorkari', salary: 17000},
    {name: 'Babul', job: 'besorkari', salary: 25000},
    {name: 'Kalam', job: 'sorkari', salary: 15000},
    {name: 'jamal', job: 'besorkari', salary: 26000},
    {name: 'kauasr', job: 'sorkari', salary: 15000},
];


const jamais = pulapan.filter((pula) => (pula.job === "sorkari" && pula.salary >= 15000) || (pula.job === "besorkari" && pula.salary >= 40000));

const lotary = Math.floor(Math.random()*jamais.length);
console.log(jamais[lotary].name, "tumi jitso...");

