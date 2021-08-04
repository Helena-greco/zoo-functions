const { species } = require('./data');
const data = require('./data');
const { employees } = require('./data');

/** Ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */
function getSpeciesByIds(...ids) { // todos os elementos id como parâmetro.
  // seu código aqui
  const speciesByIds = species.filter(({ id }) => ids.includes(id)); // cria um novo array que passam no teste que contém no nome do elemento o parâmetro passado. (id)
  return speciesByIds;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, ages) {
  // seu código aqui
  const animals = species.find((animalName) => animalName.name === animal); // Procurar pelo nome.
  return animals.residents.every((idade) => idade.age >= ages);
  // verificar se todas as idades possuem a idade mínima específica. Retorna true ou false.
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  // reduzir o array pelo nome passado no parâmetro, se for igual ao primeiro nome OU ultimo nome, chamar o obj, se não, retornar o obj vazio.
  const employeeByName = employees.reduce((accumulator, currentValue) => {
    if (currentValue.firstName === employeeName || currentValue.lastName === employeeName) {
      return currentValue;
    } return accumulator;
  }, {}); // valor inicial do array que estou criando.
  return employeeByName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith }; // spread operator para juntar os valores dos objs.
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const checkManagers = employees.some((managerId) => managerId.managers.includes(id)); // confere se pelo menos um nome do manager contém o parâmetro Id dado se é true ou false.
  return checkManagers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // default parameters, parâmetro definido para não dar erro na função.
  // seu código aqui
  const newEmployee = employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return newEmployee;
  // função push() add elementos na variável.
}

function countAnimals(specie) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
