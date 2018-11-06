// Bilangan Bulat
var bil = 13;
console.log('bulat');

// Bilangan Cacac dan Negatif
if (bil > 0) {
    console.log("cacah");
 } else if (bil < 0) {
    console.log("negatif");
 }

// Bilangan Ganjil / Genap
function bilangan(x){
    if (x % 2 == 0){
        console.log('genap');
    }else{
        console.log('ganjil');
    }
}
bilangan(13)

// Bilangan Prima
function angkaPrima(angka) {
    if(angka == 1){
      return false
    }
    for(var i=2;i<=angka;i++){
      if(angka%i==0){
        if(i<angka){
          return false
        }
        else{
          return true
        }
      }
    }
  }
  console.log(angkaPrima(13))