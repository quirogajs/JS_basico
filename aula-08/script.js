let patientList = [
    {
        name: 'Pablo',
        age: 33,
        weight: 88.5,
        height: 1.68,
    },
    {
        name: 'Jade',
        age: 31,
        weight: 80.5,
        height: 1.65,
    },
    {
        name: 'Lorrayne',
        age: 28,
        weight: 60.0,
        height: 1.57,
    },
];

let patientNames = [];
let patientAge = [];
let patientWeight = [];
let patientHeight = [];

for(let patient of patientList) {
    patientNames.push(patient.name);
    patientAge.push(patient.age);
    patientWeight.push(patient.weight);
    patientHeight.push(patient.height);
};

for(let index = 0; index < patientList.length; index++) {
    console.log(`${patientNames[index]} tem ${patientAge[index]} anos, pesa ${patientWeight[index]} kg e tem ${patientHeight[index]} de altura.`);
}