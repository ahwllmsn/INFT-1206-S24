const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': "A closeup of a human eye.",
    'pic2.jpg': "A wave-like rock formation.",
    'pic3.jpg': "A closeup of white and purple flowers.",
    'pic4.jpg': "An Egyptian painting from the Tomb of Tutankhamun.",
    'pic5.jpg': "A brown moth with spotted wings on a leaf."
}

/* Looping through images */
for (let image of imageFileNames) {
    const thumbnailImage = document.createElement("img");
    thumbnailImage.setAttribute('src', `images/${image}`);
    thumbnailImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(thumbnailImage);
    thumbBar.addEventListener('click', (e) => {
        displayedImage.setAttribute('src', e.target.src);
        displayedImage.setAttribute('alt', e.target.alt);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
    if (btn.getAttribute('class') == 'dark') {
        btn.textContent = 'Lighten';
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
