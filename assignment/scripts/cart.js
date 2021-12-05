console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(array, item){
  array.push(item);
  let x = 0;
  for (i of array){
    if (item===i){
      x++;
    }
  }
  if (x>0){
    return true;
  }
  else{
    return false;
  }
}

console.log(`This should return true: ${addItem(basket,'test item')}`);

function listItems(array){
  for (item of array){
    console.log(item);
  }
}
listItems(basket);

function empty(array){
  while (array.length>0){
    array.pop(0);
  }
}
empty(basket);
console.log(basket.length);

const maxItems = 5;

function isFull(array){
  if (array.length>= maxItems){
    return true;
  }
  else{
    return false;
  }
}

console.log(`This should return false: ${isFull(basket)}`);

function fillArray(array){
  y='I';
  while (array.length<5){
    basket.push(y);
    y=y+'I';
  }
}
fillArray(basket)
console.log(`This should return true: ${isFull(basket)}`);

function newAddItem(array, item){
  if (isFull(array)===false){
    array.push(item);
    return true;
  }
  else{
    return false;
  }
}

console.log(`This should return false: ${newAddItem(basket,'test item #2')}`);
console.log('The items is the basket are listed below:');
listItems(basket);
empty(basket);
console.log(`This should return true: ${newAddItem(basket, 'test item #3')}`);
console.log('The items is the basket are listed below:');
listItems(basket);

empty(basket);
fillArray(basket);

function removeItem(array, item){
  let x = 0;
  for (i of array){
    if (i === item){
      removedItem = i;
      basket.splice(basket.indexOf(i),1);
      x++
    }
  }
  if (x>0){
    return removedItem;
  }
  else{
    return null;
  }
}

console.log(`This should return 'III': ${removeItem(basket,'III')}`);
console.log(`This should return 'null': ${removeItem(basket,'IIIIIIII')}`)
