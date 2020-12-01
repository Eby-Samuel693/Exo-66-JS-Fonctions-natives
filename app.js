let dix = 10;
p1 = 32 * dix;
document.getElementById('entier').innerHTML = p1;
console.log(p1);

p2 = 54.85 * dix;
p2 = p2 + p1;
document.getElementById("flottant").innerHTML = p2;
console.log(p2);

p3 = 0;
document.getElementById("non-numerique").innerHTML = p3;
console.log(p3);

let p4 = document.getElementById("random");
p4.innerHTML = "nombre aleatoir ";
p4 = 0;
console.log(p4);

p5 = Math.trunc(54.988);
document.getElementById("trunc").innerHTML = p5;
console.log(p5);

function HelloWorld(nom ,prenom) {
    console.log("Hello"+ nom +  prenom);
}
let nom = ",coquelet";
let prenom = ",samuel";
let p6 = document.getElementById("replace");
HelloWorld = "Hello" +""+ nom +""+ prenom;
p6.innerHTML = "Hello" +""+ nom +""+ prenom;
console.log(HelloWorld);