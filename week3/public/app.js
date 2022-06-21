function transfer() {
  const show = document.querySelector(".show p");
  const input = document.querySelector("#sum");
  show.textContent = "Loading...";

  let url = `getData?number=${input.value}`;

  fetchData(url)
    .then((res) => {
      show.textContent = `${res.message}`;
    })
    .catch((error) => {
      show.textContent = `Error:${error}`;
    });
}

function postName() {
  const input = document.querySelector("#name");
  let url = `trackName?name=${input.value}`;
  fetchData(url)
    .then((res) => {
      alert(res.message);
      location.replace("http://localhost:3000/myName");
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchData(url) {
  let res = await fetch(`http://localhost:3000/${url}`);
  let parseData = await res.json();
  if (res.ok) {
    return parseData;
  }
  throw new Error("Something Wrong");
}
