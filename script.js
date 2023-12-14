const imgBox = document.querySelector('#imgBox');
const qrImage = document.querySelector('#qrImage');
const qrText = document.querySelector('#qrText');
const button = document.querySelector('#QRButton');

function generateQR(){
    if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value 
   imgBox.style.display = "block";}
   else{
    qrText.classList.add("error");
    setTimeout(function(){qrText.classList.remove("error")},1000);
   }
}

button.addEventListener("click", generateQR)