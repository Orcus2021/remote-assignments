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
  }
}

async function postName() {
  const input = document.querySelector("#name");
  const url = `trackNam?name=${input.value}`;
  try {
    const data = await fetchData(url);
    alert(data.message);
    location.replace("http://localhost:3000/myName");
  } catch (error) {
    console.log(error);
  }
}

async function fetchData(url) {
  const res = await fetch(`http://localhost:3000/${url}`);

  if (res.ok) {
    const parseData = await res.json();
    return parseData;
  }
  throw new Error("Something Wrong");
}
