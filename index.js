/** @format */

let button = document.getElementById("button");
button.addEventListener("click", () => {
  let imageCat = document.getElementById("image");
  let id = document.querySelector(".id");
  let cat = fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
  )
    .then((resultat) => resultat.json())
    .then((data) => {
      imageCat.src = data[0].url;
      id.innerHTML = "Identifiant : " + data[0].id;
    });
});
