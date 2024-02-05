const url = "https://streaming-availability.p.rapidapi.com"

fetch(`${url}/countries`, {headers: {'X-RapidAPI-Key': '51743aff86msh302c2f53b560150p1eae9ejsn93fe2f9c4133'}})
    .then((res) => {
        console.log(res)
      return res.json();
    })

console.log('hello!')