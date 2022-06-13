function max(numbers) {
  let maxNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
// let a = max([-1, -2, -7, -1, -10]);
// console.log(a);

function calculate(args) {
  let a;
  const { n1, n2, op } = args;
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

function calculatePrice(data) {
  const { discount, products } = data;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const { price } = products[i];
    totalPrice += price * (1 - discount);
  }
  return totalPrice;
}
// let a = calculatePrice({
//   discount: 0.1,
//   products: [
//     {
//       name: "Product 1",
//       price: 200,
//     },
//     {
//       name: "Product 2",
//       price: 500,
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
      const result = n1 + n2;

      if (j !== i && result === target) {
        array = [j, i];
        return array;
      }
    }
  }
}
// let a = twoSum([2, 7, 9, 11, 15], 24);
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
