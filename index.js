// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
  console.log(cats);
  return cats;
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
  console.log(cats);
  return cats;
}
function destructivelyRemoveLastCat() {
  cats.pop();
  console.log(cats);
}
function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log(cats);
}
function appendCat(name) {
  const newCats = [...cats, "Broom"];
  console.log(newCats);
  return newCats;
}
function prependCat(name) {
  const newCats = ["Arnold", ...cats];
  console.log(newCats);
  return newCats;
}
function removeLastCat() {
  const newCats = [...cats.slice(0, -1)];
  console.log(newCats);
  return newCats;
}
function removeFirstCat() {
  const newCats = cats.slice(1);
  console.log(newCats);
  return newCats;
}
