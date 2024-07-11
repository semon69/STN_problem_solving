const items = [
  { quantity: 2, price: 10 },
  { quantity: 1, price: 5 },
  { quantity: 4, price: 9 },
];

function calculateTotalValue(itemsArray) {
  const initialValue = 0;

  const totalValue = itemsArray.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.price;
  }, initialValue);

  return totalValue;
}

const total = calculateTotalValue(items);
console.log(total);
