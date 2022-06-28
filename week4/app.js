function delayedResult(n1, n2, delayTime, callback) {
  const result = n1 + n2;

  setTimeout(() => callback(result), delayTime);
}

// delayedResult(4, 5, 10000, function (result) {
//   console.log(result);
// }); // 9 (4+5) will be shown in the console after 3 seconds
// delayedResult(-5, 10, 2000, function (result) {
//   window.alert(result);
// }); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

async function ajax(src, callback) {
  const res = await fetch(src);
  const data = await res.json();
  callback(data);
}
function render(data) {
  const body = document.querySelector("body");

  let html;

  data.forEach((data) => {
    html = `<h1>${data.name}</h1><h2>Price: $${data.price}</h2><p>${data.description}</p>`;
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = html;
    body.appendChild(div);
  });
}
ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
