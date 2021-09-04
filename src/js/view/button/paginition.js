import { createProduct } from "../createProducts";

// 1) check if the start of counter is bigger than the length of array
// 2) increase counter with page counter
// 3) clear inner html
// 4) loop start from counter up till counter + pre page , but if the array has no values , break
// 5) change page number

export function paginitionNextFunc(pagniCounter, perPage, products, jewellery) {
  // 1)
  if (pagniCounter + perPage >= products[jewellery].length) return;
  // 2)
  pagniCounter += perPage;
  // 3)
  document.querySelector(".row").innerHTML = "";
  // 4)
  for (let i = pagniCounter; i < pagniCounter + perPage; i++) {
    if (!products[jewellery][i]) break;
    createProduct("row", i);
  }
}
export function paginitionPrevFunc(pagniCounter, perPage, products, jewellery) {
  if (pagniCounter < 0) return;
  document.querySelector(".row").innerHTML = "";
  for (let i = pagniCounter; i < pagniCounter + perPage; i++) {
    if (!products[jewellery][i]) break;
    createProduct("row", i);
  }
}
