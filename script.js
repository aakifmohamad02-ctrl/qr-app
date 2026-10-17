let qrtext = document.getElementById("qrtext");
let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");

function generate_qr() {

    if (qrtext.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");
    }
    else {
        alert("Please enter a valid text or link");
    }
}
function download_qr() {
    if (qrimg.src && imgbox.classList.contains("show-img")) {
        const link = document.createElement("a");
        link.href = qrimg.src;
        link.download = "qrcode.png";
        link.target = "_blank";
        link.click();
    }
    else {
        alert("Please generate a QR code first!");
    }
}

function clear_qr() {
    qrtext.value = "";
    qrimg.src = "";
    imgbox.classList.remove("show-img");
}

