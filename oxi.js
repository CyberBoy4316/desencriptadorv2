function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = encrypt(inputText);
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    var decryptedText = decrypt(inputText);
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function encrypt(text) {
    return text.replaceAll("e", "enter")
               .replaceAll("i", "imes")
               .replaceAll("a", "ai")
               .replaceAll("o", "ober")
               .replaceAll("u", "ufat");
}

function decrypt(text) {
    return text.replaceAll("enter", "e")
               .replaceAll("imes", "i")
               .replaceAll("ai", "a")
               .replaceAll("ober", "o")
               .replaceAll("ufat", "u");
}