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
  likes.textContent = `Liked by ${duck.likes} people`;

  likes.addEventListener("click", function () {
    handleLikes(duck);
  });
}

function handleLikes(duck) {
  let likes = document.getElementById("duck-display-likes");
  let currentNumber = Number(duck.likes);
  currentNumber++;

  likes.textContent = `Liked by ${currentNumber} people`;
}
