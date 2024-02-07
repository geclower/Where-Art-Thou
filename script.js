console.log("hello");

document.querySelector("img").addEventListener("click", showPic);

function showPic() {}

const url = "https://streaming-availability.p.rapidapi.com";
const countryList = document.querySelector("#country-select");
const serviceList = document.querySelector("#service-select");
const genreList = document.querySelector("#genre-select");
const mediaList = document.querySelector("#media-select");
const submitBtn = document.querySelector(".submit");
const contentList = document.querySelector(".results");

fetch(`${url}/countries`, {
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
      option.innerText = arr[i].name;
      option.value = arr[i].countryCode;
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
  .then((data) => {
    let arr = Object.values(data.result);
    let key = Object.keys(data.result);
    for (i = 0; i < arr.length; i++) {
      let option = document.createElement("option");
      option.innerText = arr[i];
      option.value = key[i];
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
    .then((data) => {
      let arr = Object.values(data.result);
      for (i = 0; i < arr.length; i++) {
        if (y === arr[i].countryCode) {
          let z = Object.values(arr[i].services);
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

submitBtn.addEventListener("click", handleRequest);

function handleRequest(e) {
  e.preventDefault();
  let w = countryList.value;
  let x = genreList.value;
  let y = mediaList.value;
  let z = serviceList.value;

  fetch(
    `${url}/search/filters?country=${w}&services=${z}&show_type=${y}&genres=${x}`,
    {
      headers: {
        "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let arr = data.result;
      let link = "";
      
      for (i = 0; i < arr.length; i++) {
        let arrTwo = Object.values(arr[i].streamingInfo);
        console.log(arrTwo);
        for (j = 0; j < arrTwo.length; j++) {
          if (z === arrTwo[i][0].service) {
            link = arrTwo[i][0].link;
          }
        }
        const mockHTML = `
        <li><a href=${link} target="blank">${arr[i].title}</a></li>`;
        contentList.insertAdjacentHTML("beforeend", mockHTML);
      }
    });
}

// if (window.location.pathname.includes("index.html")) {
//   submitBtn.addEventListener("click", handleRequest);
// }

// // function handleRequest(e) {
// //     e.preventDefault();

// //     let w = countryList.value;
// //     let x = genreList.value;
// //     let y = mediaList.value;
// //     let z = serviceList.value;

// //     fetch(`${url}/country=${w}&services=${z}&show_type=${y}&genres=${x}`, {
// //         headers: {
// //           "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
// //         },
// //       })
// //         .then((res) => {
// //           return res.json();
// //         })
// //         .then((data) => {
// //             let arr = Object.values(data.result);
// //             for (i = 0; i < arr.length; i++) {
// //                 let resultItem = document.createElement("li");
// //                 resultItem.innerText = arr[i].title;
// //                 resultItem.value = arr[i];
// //                 contentList.appendChild(resultItem);
// //               }
// //         })
// // }

// function handleRequest(e) {
//   e.preventDefault();
//   let w = countryList.value;
//   let x = genreList.value;
//   let y = mediaList.value;
//   let z = serviceList.value;

//   fetch(`${url}/search/filters?country=${w}&services=${z}&show_type=${y}&genres=${x}`, {
//     headers: {
//       "X-RapidAPI-Key": "51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133",
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let arr = data.result;
//         console.log(arr)
//       let htmlString = "";

//       for (i = 0; i < arr.length; i++) {
//         const htmlMock = `<li>${arr[i].title}</li>`;
//         htmlString += htmlMock;
//       }

//       localStorage.setItem("results", JSON.stringify(htmlString));

//       window.location.href = "result.html";
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   if (window.location.pathname.includes("result.html")) {
//     loadResults();
//   }
// });

// function loadResults() {
//   console.log("loading results");
//   const resultsElement = document.querySelector(".results");
//   if (resultsElement) {
//     const results = JSON.parse(localStorage.getItem("results")) || [];
//     // let htmlString = results.map(result => `<li>${result.title}</li>`).join('');
//     resultsElement.innerHTML = results;
//   }
// }
