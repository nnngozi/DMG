/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
function dmg() {
  var pronoun = ["The", "our", "your", "my"];
  let adj = ["great", "big", "small", "tall"];
  let noun = ["jogger", "baller", "miami", "florida"];
  let suffix = [".com", ".net", ".us", ".me"];

  var randomPronoun = Math.floor(Math.random() * pronoun.length);
  var randomAdj = Math.floor(Math.random() * adj.length);
  var randomNoun = Math.floor(Math.random() * noun.length);
  var randomSuffix = Math.floor(Math.random() * suffix.length);

  for (var p = 0; p < pronoun.length; p++) {
    for (var a = 0; a < adj.length; a++) {
      for (var n = 0; n < noun.length; n++) {
        for (var s = 0; s < suffix.length; s++) {

          return (
            pronoun[randomPronoun]+adj[randomAdj] +noun[randomNoun] + suffix[randomSuffix]
          );

        }
      }
    }

  }

}  
console.log(dmg ());
