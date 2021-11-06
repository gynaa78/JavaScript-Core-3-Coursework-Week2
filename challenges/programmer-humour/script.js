const divElem = document.getElementById("main");
let h1Elem= document.createElement("h1");
divElem.appendChild(h1Elem);
let imgElem = document.createElement("img");

function getImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      throw `${response.status}`;
    })
    .then((data) => {
      h1Elem.innerHTML = data.title;
      imgElem.setAttribute("src", data.img);
      divElem.appendChild(imgElem);
    });
}

getImage();
