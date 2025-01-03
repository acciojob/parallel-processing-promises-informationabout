//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image
function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = image.url;

    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
  });
}

// Function to download all images and display them
function downloadAndDisplayImages() {
  Promise.all(images.map(downloadImage))
    .then((imgElements) => {
      imgElements.forEach((img) => {
        output.appendChild(img);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

// Event listener for the button click
btn.addEventListener("click", downloadAndDisplayImages);
