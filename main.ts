//compiling and variables

const danainjax = "Hi, I am dana";
console.log(danainjax);

const functionD = () => {};

const obj: { firstName: string; lastName: string } = {
    firstName: 'Dana',
    lastName: 'Nistico',
  }
  
  console.log(obj)
  
  interface MyPizza {
    cheese: string;
    pepperoni ?: string;
    greenPeppers ?: string;
    onion ?: string;
    price: Number;
  }
  
  const order1: MyPizza = {
    cheese: 'extra',
    pepperoni: 'regular',
    price: 21.95,
  }
  
  console.log(order1)
  