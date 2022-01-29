const people1 = [
  {
    name: "Alex",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
]; /// нарцис  'Jhon'
const people3 = [
  {
    name: "Alex",
    know: ["Alex", "Eva"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
]; /// немає нарциса
const people = [
  {
    name: "Alex",
    know: ["Alex", "Eva"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Eva"],
  },
]; /// немає нарциса

// function everyPeople(elem) {
//   let targetPeople;

//   for (let i = 0; i < elem.length; i += 1) {
//     if ((elem[i].know.length === 0) & (!elem[i].know.length !== 1)) {
//       for (let j = 1; j < elem.length; j++) {
//         console.log(elem[i].name);
//       }
//     }
//   }
// }

function findName(arr) {
  const mabeNar = arr.filter(({ know }) => !know.length);
  if (mabeNar.length !== 1) {
    return "";
  }
  const name = mabeNar.reduce((acc, { name }) => acc + name, "");
  const isNar = arr
    .filter(({ know }) => know.length)
    .every(({ know }) => know.includes(name));
  return isNar ? name : "";
}

everyPeople(people1);
// everyPeople(people);
// everyPeople(people3);

const Andrey = "Andrey";
const Artem = "Artem";

String.prototype.__proto__ = Object.create(null, {
  privet: {
    value: function (name) {
      console.log(`Ny privet ${name}`);
    },
  },
});

String.prototype.poka = function (name) {
  console.log(`Ny poka ${name}`);
};

Andrey.privet(Andrey);
Artem.privet(Artem);

Andrey.poka(Andrey);
Artem.poka(Artem);

// Прототипы и их наследования
function dog(name) {
  this.name = name;
}

dog.prototype.gav = function () {
  console.log(`${this.name} GAV GAV`);
};

class Bobik extends dog {}

class SecondBobik extends Bobik {
  sidet() {
    console.log(`${this.name} OK BoSS`);
  }
}

let bobik = new Bobik("Bobik");

let secondBobik = new SecondBobik("Gavchik");

secondBobik.gav();

secondBobik.sidet();
