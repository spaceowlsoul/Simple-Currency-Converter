const input = require('sync-input');

const currencies = [
  {name: 'USD', value: 1},
  {name: 'JPY', value: 113.5},
  {name: 'EUR', value: 0.89},
  {name: 'RUB', value: 74.36},
  {name: 'GBP', value: 0.75},
];

console.log('Welcome to Currency Converter!');
currencies.forEach(el => console.log(`1 USD equals ${el.value} ${el.name}`));

function convertion() {
  while (true) {
    const initialCurrency = input('What do you want to convert?\nFrom:').toUpperCase();
    if (currencies.map(el => el.name).includes(initialCurrency)) {
      const finalCurrency = input('To: \n').toUpperCase();
      if (currencies.map(el => el.name).includes(finalCurrency)) {
          const amount = input('Amount: \n');
          if (isNaN (Number(amount))) {
            console.log('The amount has to be a number');
            } else if (Number(amount) < 1) {
              console.log('The amount cannot be less than 1');
              } else {
                const indexInitial = currencies.findIndex(el => el.name === initialCurrency);
                const indexFinal = currencies.findIndex(el => el.name === finalCurrency);
                const valueInitial = currencies[indexInitial].value;
                const valueFinal = currencies[indexFinal].value;
                const result = (1 / valueInitial * amount * valueFinal).toFixed(4);
                console.log(`Result: ${amount} ${initialCurrency} equals ${result} ${finalCurrency}`);
                }
      } else {
        console.log('Unknown currency');
        continue;
      }
    } else {
      console.log('Unknown currency');
      continue;
    }
  check = true;
  }
}

let exit = false;
while (!exit) {
    const action = input('What do you want to do?\n1-Convert currencies 2-Exit program\n');
    if (action === '1') {
      convertion();
    } else if (action === '2') {
      console.log('Have a nice day!');
      exit = true;
      break;
    } else {
      console.log('Unknown input');
    }
  }
