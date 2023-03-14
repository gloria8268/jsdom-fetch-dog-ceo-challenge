
function fetchImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => {
      const imagesArr = json.message
      renderimages(imagesArr)
    })
}

function renderimages(images) {
  const imageDivEl = document.querySelector('#dog-image-container');
  for (const element of images) {
    const imageEl = document.createElement('img');
    imageEl.src = element;
    imageDivEl.appendChild(imageEl)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  fetchImages()
});


function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
      let breedsObj = json.message
      let breedskeys = Object.keys(breedsObj)
      renderBreeds(breedskeys)
    })
}


function renderBreeds(names) {
  const breedsUlEl = document.querySelector('#dog-breeds');
  for (const element of names) {
    const breedLiEl = document.createElement('li');
    breedLiEl.className = 'dogName'
    breedLiEl.innerHTML = element;
    breedsUlEl.appendChild(breedLiEl)
  }

  function clickName(event) {
    event.target.style.backgroundColor = 'red'
  }

  breedsUlEl.addEventListener('click', clickName)
}

document.addEventListener('DOMContentLoaded', fetchBreeds);


const dropdown = document.getElementById('breed-dropdown');
const breedList = document.getElementById('dog-breeds').getElementsByTagName('li');

dropdown.addEventListener('change', function () {
  const selectedLetter = this.value;

  for (let i = 0; i < breedList.length; i++) {
    const breedName = breedList[i].textContent.trim();
    const breedFirstLetter = breedName.charAt(0).toLowerCase();

    if (breedFirstLetter === selectedLetter) {
      breedList[i].style.display = 'block';
    } else {
      breedList[i].style.display = 'none';
    }
  }
});






