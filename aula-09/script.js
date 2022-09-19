function calculateImc (weight, height) {
    let imc = weight / (height ** 2);
    return imc.toFixed(2);
}

const patientList = [
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

for(let patient of patientList) {
    let imc = calculateImc(patient.weight, patient.height);
    console.log(`Paciente ${patient.name} possui o IMC de: ${imc}`);
}