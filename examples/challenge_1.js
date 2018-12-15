// Create a function (or set of functions that outputs the HTML below when given a list of directors and movies.)


let desiredHtml = `
  <div class='directors'>
    <div class='director'>
      <h2>Jeff Nichols</h2>
      <p>Movies by Jeff Nichols:</p>
      <ul class='movies'>
        <li>Shotgun stories</li>
        <li>Mud</li>
        <li>Take Shelter</li>
        <li>Midnight special</li>
      </ul>
    </div>
    <div class='director'>
      <h2>Christopher Nolan</h2>
      <!-- and so on... repeat for all directors -->
  </div>
`;

// Write your function(s) here!

let directors = require("../data/directors_with_movies.json");
let html = generateDirectorsHtml(directors);

console.log(html);