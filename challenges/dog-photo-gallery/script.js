const photosDiv = document.getElementById("photos"); 
const list = document.getElementById("list");

function NewDogPhoto() {
  const listItem = document.createElement("li");
  list.innerHTML = "";

  listItem.style.listStyleType = "none";
  list.className = "listItem"; 

  const img = document.createElement("img");
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw `${response.status} ${response.statusText}`;
    })
    .then(function (data) {
      img.src = `${data.message}`;
      console.log(img.src);
    })
    .catch(function (error) {
      console.log("This is an error", error);
    });

  list.appendChild(listItem);
  listItem.appendChild(img);
  list.style.display = "block";
}

function deletePictures() { 
  list.innerHTML = "";
}
