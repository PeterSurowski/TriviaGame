var title = "Big+Lebowski";
var queryURL ="http://www.omdbapi.com/?t=" + title + "&plot=short&apikey=40e9cece";

var result = "How about Now?";

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function (result) {
  console.log(result);
  console.log(result.Title);
  console.log(result.Ratings[0].Value)
});

console.log(result)
console.log("This will appear before the movie, most likely.");
var x = 2;
var y = 3;
var z = x+y;
console.log(z);