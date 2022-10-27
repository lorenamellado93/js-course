'use strict';

//console.log(me);
//console.log(job);
//console.log(year);

/* var me = 'Lorena';
let job = 'teacher';
const year = 1991;

//Functions
//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShopping();
//console.log(typeof numProducts);
var numProducts = 10;
//console.log(numProducts);
function deleteShopping() {
  //console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(this);

const calcAge = function (birthday) {
  console.log(2037 - birthday);
  console.log(this);
};

const calcAgeArrow = birthday => {
  console.log(2037 - birthday);
  console.log(this);
};
calcAgeArrow(1991);

 */
var firstName = 'Matilda';

const jonas = {
  //No es un code block sino un object literal
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    const that = this; //Solución 1 declarar this fuera de la función para obtener la info de this
    const isMillenial = function () {
      console.log(that.year >= 1981 && that.year <= 1996);
    };
    //console.log(this);

    //Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();
