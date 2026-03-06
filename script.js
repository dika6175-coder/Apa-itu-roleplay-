// Animasi scroll
window.addEventListener("scroll", function(){

let elements = document.querySelectorAll("section");

elements.forEach(function(el){

let position = el.getBoundingClientRect().top;
let screen = window.innerHeight;

if(position < screen - 100){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}

});

});


<script>

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let nama = document.getElementById("nama").value;
let hp = document.getElementById("hp").value;
let pesan = document.getElementById("pesan").value;

let nomorAdmin = "6288200875397";

let text =
"Pesan dari Website SAMP RP\n\n" +
"Nama : " + nama + "\n" +
"No HP : " + hp + "\n" +
"Pesan : " + pesan;

let url = "https://api.whatsapp.com/send?phone=" + nomorAdmin + "&text=" + encodeURIComponent(text);

window.open(url);

});

</script>