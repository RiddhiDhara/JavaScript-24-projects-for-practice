const qrContainer = document.querySelector(".qr-container");
const qrTextInput = document.querySelector(".qr-text");
const generateQrCodebtn = document.querySelector(".generate-qr-code-btn");
const errorMessageText = document.querySelector(".error-message-text");

generateQrCodebtn.addEventListener("click",() => {
    validateQR();
})

function validateQR(){
    if(qrTextInput.value.trim().length > 0){
        qrContainer.innerHTML = "";
        errorMessageText.innerHTML = "";
        generateQR();
    }else{
        qrContainer.innerHTML = "";
        errorMessageText.innerHTML = "Input is Empty! Try again.";
    }
}

function generateQR() {
    new QRCode(qrContainer, {
        text: qrTextInput.value,
        width: 400,
        height: 400,
        colorDark : "#ff8400",
        colorLight : "#151515",
    });
}