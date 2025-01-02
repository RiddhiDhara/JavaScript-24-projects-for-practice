const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

// Create Random HEX color

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789abcdef";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
  hexColorValue.style.color = `#${hexColorOutput}`;
});

// RGB Color generator

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");
const rgbColorValue = document.querySelector(".rgb-color-value");
const redLabel = document.querySelector(".redLabel");
const greenLabel = document.querySelector(".greenLabel");
const blueLabel = document.querySelector(".blueLabel");

rgbBtn.addEventListener("click", () => {
  const extractRedColor = getRedInputRange.value;
  const extractGreenColor = getGreenInputRange.value;
  const extractBlueColor = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${extractRedColor}, ${extractGreenColor}, ${extractBlueColor})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedColor}, ${extractGreenColor}, ${extractBlueColor})`;
  rgbColorValue.style.color = `rgb(${extractRedColor}, ${extractGreenColor}, ${extractBlueColor})`;
  rgbBtn.style.color = `rgb(${extractRedColor}, ${extractGreenColor}, ${extractBlueColor})`;

  redLabel.style.color = `rgb(${extractRedColor}, ${extractGreenColor}, ${extractBlueColor})`;
  greenLabel.style.color = `rgb(${extractRedColor}, ${extractGreenColor}, ${extractBlueColor})`;
  blueLabel.style.color = `rgb(${extractRedColor}, ${extractGreenColor}, ${extractBlueColor})`;
});

// copy to clipboard function

function copyToClipboard(item) {
  navigator.clipboard.writeText(item);
  console.log(item);
  alert(item + " is copied to clipboard!!");
}

// hex-copy-to-clipboard
hexCopyBtn.addEventListener("click", () => {
  copyToClipboard(hexColorValue.textContent);
});

// rgb-copy-to-clipboard
rgbCopyBtn.addEventListener("click", () => {
  copyToClipboard(rgbColorValue.textContent);
});
