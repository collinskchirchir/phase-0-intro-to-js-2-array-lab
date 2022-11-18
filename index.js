const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{   
   return `${cats.push(name)}`;
}

function destructivelyPrependCat(name)
{   
   return `${cats.unshift(name)}`;
}

function destructivelyRemoveLastCat()
{
   return cats.pop();
}
function destructivelyRemoveFirstCat()
{
   return cats.shift();
}
function appendCat(name)
{
   const copyCats = [...cats,name];
   return copyCats;
}
function appendCat(name)
{
   const copyCats = [...cats,name];
   return copyCats;
}
function prependCat(name)
{
   const copyCats = [name, ...cats];
   return copyCats;
}
function removeLastCat()
{
   const copyCats = [...cats];
   return copyCats.splice(0, cats.length-1);
}
function removeFirstCat()
{
   const copyCats = [...cats];
   return copyCats.splice(1);
}
console.log(cats)