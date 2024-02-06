console.log("hello");

const url = "https://streaming-availability.p.rapidapi.com";
const countryList = document.querySelector("#country-select");
const serviceList = document.querySelector("#service-select");
const genreList = document.querySelector("#genre-select");
const mediaList = document.querySelector("#media-select");
const submitBtn = document.querySelector(".submit");
const contentList = document.querySelector(".results");

// fetch(`${url}/countries`, {
//   headers: {
//     "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
//   },
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     let arr = Object.values(data.result);
//     for (i = 0; i < arr.length; i++) {
//       let option = document.createElement("option");
//       option.innerText = arr[i].name;
//       option.value = arr[i].countryCode;
//       countryList.appendChild(option);
//     }
//   });

fetch(`${url}/genres`, {
  headers: {
    "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let arr = Object.values(data.result);
    for (i = 0; i < arr.length; i++) {
      let option = document.createElement("option");
      option.innerText = arr[i];
      option.value = arr[i].id;
      genreList.appendChild(option);
    }
  });

// countryList.addEventListener("change", chooseService);

// function chooseService(e) {
//   e.preventDefault();

//   let y = countryList.value;

//   fetch(`${url}/countries`, {
//     headers: {
//       "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let arr = Object.values(data.result);
//       for (i = 0; i < arr.length; i++) {
//         if (y === arr[i].countryCode) {
//           let z = Object.values(arr[i].services)
//           for (j = 0; j < z.length; j++) {
//             let option = document.createElement("option");
//             option.innerText = z[j].name;
//             option.value = z[j].id;
//             serviceList.appendChild(option);
//           }
//         }
//       }
//     });
// }

submitBtn.addEventListener("click", handleRequest);

// function handleRequest(e) {
//     e.preventDefault();

//     let w = countryList.value;
//     let x = genreList.value;
//     let y = mediaList.value;
//     let z = serviceList.value;

//     fetch(`${url}/country=${w}&services=${z}&show_type=${y}&genres=${x}`, {
//         headers: {
//           "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
//         },
//       })
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//             let arr = Object.values(data.result);
//             for (i = 0; i < arr.length; i++) {
//                 let resultItem = document.createElement("li");
//                 resultItem.innerText = arr[i].title;
//                 resultItem.value = arr[i];
//                 contentList.appendChild(resultItem);
//               }
//         })
// }

function handleRequest(e) {
    e.preventDefault()
  let dummyData = [
    {
      type: "movie",
      title: "Army of Thieves",
      streamingInfo: {},
      year: 2021,
      imdbId: "tt13024674",
      tmdbId: 796499,
      originalTitle: "Army of Thieves",
      genres: [],
      directors: [],
    },
    {
      type: "movie",
      title: "Army of Mice",
      streamingInfo: {},
      year: 2021,
      imdbId: "tt13024674",
      tmdbId: 796499,
      originalTitle: "Army of Thieves",
      genres: [],
      directors: [],
    },
    {
      type: "movie",
      title: "Army of Cats",
      streamingInfo: {},
      year: 2021,
      imdbId: "tt13024674",
      tmdbId: 796499,
      originalTitle: "Army of Thieves",
      genres: [],
      directors: [],
    },
  ];

    let arr = dummyData;

    let htmlString = ""

    for (i = 0; i < arr.length; i++) {
        const htmlMock = `<li>${arr[i].title}</li>`
        htmlString += htmlMock
    }

    console.log(htmlString)
    
    window.location.replace("result.html")
    contentList.insertAdjacentHTML("beforeend", htmlString);
}
