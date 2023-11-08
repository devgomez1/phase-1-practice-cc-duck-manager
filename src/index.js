// write your code here!
fetch("http://localhost:3000/ducks")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach(displayImages);
  });

function displayImages(duck) {
  let duckDiv = document.getElementById("duck-nav");
  let duckImg = document.createElement("img");
  duckImg.src = duck.img_url;

  duckDiv.append(duckImg);
  duckImg.addEventListener("click", function () {
    displayDuck(duck);
  });
}

function displayDuck(duck) {
  let name = document.getElementById("duck-display-name");
  name.textContent = duck.name;

  let image = document.getElementById("duck-display-image");
  image.src = duck.img_url;

  let likes = document.getElementById("duck-display-likes");
  likes.textContent = `${duck.likes} Likes`;

  let count = duck.likes;

  likes.addEventListener("click", function () {
    count++;
    likes.textContent = `${count} Likes`;
  });
}

let form = document.getElementById("new-duck-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let newduck = {
    name: e.target["duck-name-input"].value,
    img_url: e.target["duck-image-input"].value,
    likes: 0,
  };
  displayImages(newduck);
});
