const url = "https://streaming-availability.p.rapidapi.com";
const countryList = document.querySelector("#country-select");
const serviceList = document.querySelector("#service-select");
const genreList = document.querySelector("#genre-select");
const mediaList = document.querySelector("#media-select");

fetch(`${url}/countries`, {
  headers: {
    "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    let x = Object.values(result.result);
    for (i = 0; i < x.length; i++) {
      let option = document.createElement("option");
      option.innerText = x[i].name;
      option.value = x[i].countryCode;
      countryList.appendChild(option);
    }
  });

fetch(`${url}/genres`, {
  headers: {
    "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    let x = Object.values(result.result);
    for (i = 0; i < x.length; i++) {
      let option = document.createElement("option");
      option.innerText = x[i];
      option.value = x[i];
      genreList.appendChild(option);
    }
  });

countryList.addEventListener("change", chooseService);

function chooseService(e) {
  e.preventDefault();

  let y = countryList.value;

  fetch(`${url}/countries`, {
    headers: {
      "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      let x = Object.values(result.result);
      for (i = 0; i < x.length; i++) {
        if (y === x[i].countryCode) {
          let z = Object.values(x[i].services)
          console.log(z)
          for (j = 0; j < z.length; j++) {
            let option = document.createElement("option");
            option.innerText = z[j].name;
            option.value = z[j].id;
            serviceList.appendChild(option);
          }
        }
      }
      
    });
}

console.log("hello");
