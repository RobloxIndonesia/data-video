function tampil7(){
    var link = document.getElementById("link1").value;
    var gambar = document.getElementById("gambar1");

    if(link === ""){
        alert("Masukkan link gambar 1!");
    }else{
        gambar.src = link;
        gambar.style.display = "block";
    }
}

function tampil8(){
    var link = document.getElementById("link2").value;
    var gambar = document.getElementById("gambar2");

    if(link === ""){
        alert("Masukkan link gambar 2!");
    }else{
        gambar.src = link;
        gambar.style.display = "block";
    }
}

function tampil3(){
    var link = document.getElementById("link3").value;
    var gambar = document.getElementById("gambar3");

    if(link === ""){
        alert("Masukkan link gambar 3!");
    }else{
        gambar.src = link;
        gambar.style.display = "block";
    }
}
function toggleKonten() {
    var konten = document.getElementById("isiKonten");

    if (konten.style.display === "none") {
        konten.style.display = "block";
    } else {
        konten.style.display = "none";
    }
}
function tampil1(){
    var teks = document.getElementById("tulisan1").value;
    document.getElementById("hasil1").innerHTML = teks;
}

function tampil2(){
    var teks = document.getElementById("tulisan2").value;
    document.getElementById("hasil2").innerHTML = teks;
}

function tampil3(){
    var teks = document.getElementById("tulisan3").value;
    document.getElementById("hasil3").innerHTML = teks;
}

function tampil4(){
    var teks = document.getElementById("tulisan4").value;
    document.getElementById("hasil4").innerHTML = teks;
}

function tampil5(){
    var teks = document.getElementById("tulisan5").value;
    document.getElementById("hasil5").innerHTML = teks;
}

function tampil6(){
    var teks = document.getElementById("tulisan6").value;
    document.getElementById("hasil6").innerHTML = teks;
}
