function max(numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
// let a = max([5, 2, 7, 1, 6]);
// console.log(a);
function calculate(args) {
  let a;
  let { n1, n2, op } = args;
  if (op === "+") {
    a = n1 + n2;
    return a;
  } else if (op === "-") {
    a = n1 - n2;
    return a;
  } else if (op === "*") {
    a = n1 * n2;
    return a;
  } else if (op === "/") {
    a = n1 / n2;
    return a;
  } else {
    a = "Not supported";
    return a;
  }
}
// let a = calculate({ n1: 1, n2: 6, op: "x" }); // result to 5
// console.log(a);

function calculate(data) {
  let { discount, products } = data;
  for (let i = 0; i < products.length; i++) {
    let { price } = products[i];
    products[i].price = price * (1 - discount);
  }
  return products;
}
// let a = calculate({
//   discount: 0.1,
//   products: [
//     {
//       name: "Product 1",
//       price: 100,
//     },
//     {
//       name: "Product 2",
//       price: 700,
//     },
//     {
//       name: "Product 3",
//       price: 250,
//     },
//   ],
// });
// console.log(a);

function twoSum(nums, target) {
  let array = [];

  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums.length; i++) {
      let n1 = nums[j];
      let n2 = nums[i];
      let result = n1 + n2;

      if (j !== i && result === target) {
        array = [j, i];
        return array;
      }
    }
  }
}
// let a = twoSum([2, 7, 11, 15], 26);
// console.log(a);

// ------------website js--------------------

function changeBanner() {
  let banner = document.querySelector(".banner h1");
  banner.innerHTML = "Have a Good Time!";
}
function menuToggle() {
  let navigation = document.querySelector(".navigation");

  navigation.classList.toggle("active");
}
function showContent() {
  let content = document.querySelector(".container2");
  content.classList.toggle("show");
}
