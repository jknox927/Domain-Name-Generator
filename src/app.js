/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.querySelector("button").addEventListener("click", clickMe);

function generateDomain() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  let arr = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        arr.push(pronoun + adj + noun + ".com");
      }
    }
  }
  return arr;
}

for (let url of generateDomain()) {
  document.getElementById("result").innerHTML += "<br>" + url;
}

function clickMe() {
  alert("But for now, rest well and dream of large errors");
}
