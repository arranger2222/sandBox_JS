function makeCook(name) {
  function makeDish(dish) {
    return console.log(`Cook ${name} makes ${dish}`);
  }
  return makeDish;
}

const mango = makeCook('Mango');
const poly = makeCook('Poly');

mango('tea');
poly('cake');
