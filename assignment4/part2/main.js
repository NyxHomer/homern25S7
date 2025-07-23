/*
    Name: Nyx Homer
	File: main.js
	Date: 16/07/2025
	Assignment 4 - Part 2
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    "./images/pic1.jpg",
    "./images/pic2.jpg",
    "./images/pic3.jpg",
    "./images/pic4.jpg",
    "./images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const imageAlts = [
    "A closeup of an eye",
    "Wave pattern",
    "Purple and white flowers",
    "Egyptian paintings",
    "A butterfly"];

/* Looping through images */
/* For loop  */
for(let i = 0; i < images.length; i++){
    // Create new image
    const newImage = document.createElement('img');
    // Set new image source to element of array
    newImage.setAttribute('src', images[i]);
    // Set new image alt to element of array
    newImage.setAttribute('alt', imageAlts[i]);
    // Add newiamge to thumbar
    thumbBar.appendChild(newImage);
    
    // Add click listener
    newImage.addEventListener("click", e => {
    // Change displayed image to clicked image
    displayedImage.src = e.target.src;
    // Change displayed alt to clicked image
    displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    // Store the buttons class
    const btnClass = btn.getAttribute('class');

    // If the button class is currently set to dark
    if(btnClass == 'dark'){
        // Set class attribute to light
        btn.setAttribute('class', 'light');
        // Change text to lighten
        btn.textContent = "Lighten";
        // Add a dark overlay
        overlay.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    }
    // If button class is not dark
    else{
        // Set class to dark
        btn.setAttribute('class', 'dark');
        // Set button text to darken
        btn.textContent = "Darken";
        // Remove dark overlay
        overlay.style.backgroundColor = "rgb(0, 0, 0, 0)";
    }
});
