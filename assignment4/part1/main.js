/*
    Name: Nyx Homer
	File: main.js
	Date: 16/07/2025
	Assignment 4 - Part 1
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Copied story text
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// 3 arrays
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];



function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);



    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name)
    }

    if(document.getElementById("uk").checked) {
        // 1 stone = 14 pounds
        const weight = Math.round(300 / 14) + ' stones';
        newStory = newStory.replaceAll("300 pounds", weight);
        // Fahrenheit to Celsius
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replaceAll("94 fahrenheit", temperature);
        
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}