async function transfer() {
  const show = document.querySelector(".show p");
  const input = document.querySelector("#sum");
  show.textContent = "Loading...";

  const url = `getData?number=${input.value}`;

  try {
    const data = await fetchData(url);
    console.log(data.message);
    show.textContent = `${data.message}`;
  } catch (error) {
    show.textContent = `${error}`;
    console.log(error);
  }

  // fetchData(url)
  //   .then((res) => {
  //     show.textContent = `${res.message}`;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     show.textContent = `Error:${error.message}`;
  //   });
}

function postName() {
  const input = document.querySelector("#name");
  const url = `trackName?name=${input.value}`;
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
  const res = await fetch(`http://localhost:3000/${url}`);

  if (res.ok) {
    const parseData = await res.json();
    return parseData;
  }
  throw new Error("Something Wrong");
}
