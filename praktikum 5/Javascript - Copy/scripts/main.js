function getAngka() {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    return [a, b];
}

function tambah() {
    let [a, b] = getAngka();
    document.getElementById("hasil").innerText = a + b;
}

function kurang() {
    let [a, b] = getAngka();
    document.getElementById("hasil").innerText = a - b;
}

function kali() {
    let [a, b] = getAngka();
    document.getElementById("hasil").innerText = a * b;
}

function bagi() {
    let [a, b] = getAngka();
    if (b === 0) {
        document.getElementById("hasil").innerText = "Tidak bisa dibagi 0";
    } else {
        document.getElementById("hasil").innerText = a / b;
    }
}
