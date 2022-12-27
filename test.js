let bookPrice = 12.49;
let cdPrice = 14.99;
let chocolatePrice = 0.85;
let impChocolatePrice1 = 10.0;
let impChocolatePrice2 = 11.25;
let impPerfumePrice1 = 47.5;
let impPerfumePrice2 = 27.99;
let perfumePrice = 18.99;
let pillsPrice = 9.75;

function tax(x) {
  if (x == bookPrice || x == chocolatePrice || x == pillsPrice) {
    return 0;
  } else if (x == cdPrice || x == perfumePrice) {
    rest = Math.floor(x * 0.1 * 100) % 5;
    if (rest === 0) {
      rest = 5;
    }
    roundedTax = (Math.floor(x * 0.1 * 100) + (5 - rest)) / 100;
    return roundedTax;
  } else if (x == impPerfumePrice1 || x == impPerfumePrice2) {
    rest = Math.floor(x * 0.15 * 100) % 5;
    if (rest === 0) {
      rest = 5;
    }
    roundedTax = (Math.floor(x * 0.15 * 100) + (5 - rest)) / 100;
    return roundedTax;
  } else {
    rest = Math.floor(x * 0.05 * 100) % 5;
    if (rest === 0) {
      rest = 5;
    }
    roundedTax = (Math.floor(x * 0.05 * 100) + (5 - rest)) / 100;
    return roundedTax;
  }
}
bookLog = 2 + " book: " + 2 * (bookPrice + tax(bookPrice));
cdLog = 1 + " music CD: " + (cdPrice + tax(cdPrice));
chocolateLog = 1 + " chocolate bar: " + (chocolatePrice + tax(chocolatePrice));
impChocolate1Log =
  1 +
  " imported box of chocolate: " +
  (impChocolatePrice1 + tax(impChocolatePrice1));
impChocolate2Log =
  3 +
  " imported boxes of chocolate: " +
  3 * (impChocolatePrice2 + tax(impChocolatePrice2));
impPerfumeLog1 =
  1 +
  " imported bottle of perfume: " +
  (impPerfumePrice1 + tax(impPerfumePrice1));
impPerfumeLog2 =
  1 +
  " imported bottle of perfume: " +
  (impPerfumePrice2 + tax(impPerfumePrice2));
perfumeLog = 1 + " bottle of perfume: " + (perfumePrice + tax(perfumePrice));
pillsLog = 1 + " packet of headache pills: " + (pillsPrice + tax(pillsPrice));
function pricesTable(s) {
  if (s === 1) {
    totalTax = 2 * tax(bookPrice) + tax(cdPrice) + tax(chocolatePrice);
    totalPrice = 2 * bookPrice + cdPrice + chocolatePrice + totalTax;
    console.log(bookLog);
    console.log(cdLog);
    console.log(chocolateLog);
    console.log("Sales Taxes: " + totalTax);
    console.log("Total: " + totalPrice);
  } else if (s === 2) {
    totalTax = tax(impChocolatePrice1) + tax(impPerfumePrice1);
    totalPrice = impChocolatePrice1 + impPerfumePrice1 + totalTax;
    console.log(impChocolate1Log);
    console.log(impPerfumeLog1);
    console.log("Sales Taxes: " + totalTax);
    console.log("Total: " + totalPrice);
  } else {
    totalTax =
      tax(impPerfumePrice2) +
      tax(perfumePrice) +
      tax(pillsPrice) +
      3 * tax(impChocolatePrice2);
    totalPrice =
      impPerfumePrice2 +
      perfumePrice +
      pillsPrice +
      impChocolatePrice2 +
      totalTax;
    console.log(impPerfumeLog2);
    console.log(perfumeLog);
    console.log(pillsLog);
    console.log(impChocolate2Log);
    console.log("Sales Taxes: " + totalTax);
    console.log("Total: " + totalPrice);
  }
}
pricesTable(3);
