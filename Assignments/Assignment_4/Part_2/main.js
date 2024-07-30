const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    pic1: "A closeup of a human eye.",
    pic2: "A wave-like rock formation.",
    pic3: "A closeup of white and purple flowers.",
    pic4: "An Egyptian painting from the Tomb of Tutankhamun.",
    pic5: "A brown moth with spotted wings on a leaf."
}

/* Looping through images */
for (let image of imageFileNames) {
    let thumbnailImage = document.createElement("img");
    thumbnailImage.setAttribute('src', 'xxx');
    thumbnailImage.setAttribute('alt', 'xxx');
    thumbBar.append(thumbnailImage);
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
