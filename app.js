var is_lanjut = true;
while(is_lanjut) {
    var player = prompt("Silahkan Pilih : \n kertas,batu,gunting");
    var integerRandom =  Math.floor((Math.random() * 3) + 1);
    var computer = "";
    if (integerRandom == 1) {
        computer = "kertas";
    } else if(integerRandom == 2) {
        computer = "batu";
    } else {
        computer = "gunting";
    }
    hasil = "";
    if(computer == player) {
        hasil = "SERI";
    } else if(player == "kertas") {
        hasil = computer == "batu" ? "MENANG" : "KALAH";
    } else if(player == "batu") {
        hasil = computer == "kertas" ? "MENANG" : "KALAH";
    } else if(player == "gunting") {
        hasil = computer == "batu" ? "KALAH" : "MENANG";
    } else {
        hasil = "Inputan anda salah";
    }
    alert("Anda : "+player+ " vs Computer "+computer+" \n Hasil = "+hasil);
    var is_lanjut = prompt("Ingin Lanjut ? \n Ketik Yes");
    is_lanjut = is_lanjut != "Yes" ? false : true; 
}
