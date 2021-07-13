const fs = require("fs");
let movieList = [];

try {
  let tempJson = fs.readFileSync("./netflix.json");
  let tempNetflix = JSON.parse(tempJson);
  movieList.push(tempNetflix);
} catch (error) {
  movieList = [];
}

const add = () => {
  if (process.argv[2] === "add") {
    tempMovie = { movie: process.argv[3] };
    movieList.push(tempMovie);
    let stringMovieList = JSON.stringify(movieList.flat(1));
    console.log(movieList);
    fs.writeFileSync("./netflix.json", stringMovieList);
  }

};
const deleteItem = () => {
  if (process.argv[2] === "delete") {
    let deleteIndex;
    movieList[0].map((movie, index) => {
      if (movie.name === process.argv[3]) {
        deleteIndex = index;
      }
    });
    movieList[0].splice(deleteIndex, 1);
    let stringMovieList = JSON.stringify(movieList.flat(1));
    fs.writeFileSync('./netflix.json', stringMovieList);
}
};
add();
deleteItem()
