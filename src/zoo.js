const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) { // todos os elementos id como parâmetro.
  const speciesByIds = species.filter((specie, index) => specie.id === ids[index]); // cria um novo array que passa na condição do id ser estritamente igual.
  return speciesByIds;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, ages) {
  const animals = species.find((animalName) => animalName.name === animal); // Procura o nome dado no parâmetro dentro do objeto.
  return animals.residents.every((idade) => idade.age >= ages);
  // verificar se todas as idades dos animais no obj possuem a idade mínima específica. Retorna true ou false.
}

function getEmployeeByName(employeeName) {
  // reduzir o array pelo nome passado no parâmetro, se for igual ao primeiro nome OU ultimo nome, chamar o obj, se não, retornar o obj vazio.
  const employeeByName = employees.reduce((accumulator, currentValue) => {
    if (currentValue.firstName === employeeName || currentValue.lastName === employeeName) {
      return currentValue;
    } return accumulator;
  }, {}); // valor inicial do array que estou criando.
  return employeeByName;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith }; // spread operator para juntar os valores dos objs.
  return newEmployee;
}

/** Ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */

function isManager(id) {
  // confere se pelo menos um nome do manager contém o parâmetro Id dado se é true ou false.
  const checkManagers = employees.some((managerId) => managerId.managers.includes(id));
  return checkManagers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // default parameters, parâmetro definido para definir o valor do elemento no obj.
  const newEmployee = employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return newEmployee;
}

function countAnimals(specie) {
  if (!specie) {
    const countingAnimals = species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator; // retorna o nome: quantidade.
    }, {});
    return countingAnimals;
  }
  const countPerAnimal = species.find((animal) => animal.name === specie); // nome do animal === parâmetro.
  return countPerAnimal.residents.length; // retorna só a quantidade.
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants; // definir um valor padrão.
  const total1 = prices.Adult * Adult;
  const total2 = prices.Senior * Senior;
  const total3 = prices.Child * Child;
  return total1 + total2 + total3;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const weekObj = Object.entries(hours); // resgatar os pares de chaves e valores.
  const schedule = weekObj.reduce((dayObj, day) => { // index 1 de entries.
    const obj = dayObj;
    if (day[1].open === 0 || day[1].close === 0) {
      obj[day[0]] = 'CLOSED'; // index 0 de entries.
      return obj;
    }
    obj[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    return obj;
  }, {});
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const manager = employees.find((name) => name.id === id); // comparar o gerenteId com o parâmetro.
  const responsible = manager.responsibleFor; // puxar quais animais são gerenciados.
  const managedAnimal = species.find((animalId) => animalId.id === responsible[0]); // pegar o PRIMEIRO animal.
  const compareAges = managedAnimal.residents.reduce((oldest, tested) => {
    if (oldest.age > tested.age) {
      return oldest;
    } return tested;
  });
  return [compareAges.name, compareAges.sex, compareAges.age]; // só os valores
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

/** Ref: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessarya/ */

function increasePrices(percentage) {
  const calculatingPrice = (price) => {
    const increase = percentage / 100;
    const totalPrice = price + price * increase;
    return Math.round(totalPrice * 100) / 100;
  };
  const { Adult, Senior, Child } = prices;
  prices.Adult = calculatingPrice(Adult); // calculando o aumento do preço original.
  prices.Senior = calculatingPrice(Senior);
  prices.Child = calculatingPrice(Child);
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
