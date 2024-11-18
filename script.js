//Developer by Michael Sitanggang
function redirect() {
    window.open("https://drive.google.com/drive/folders/10nd1fsCI10YnEgNvm1iw3AeecuQeZI_w", "_blank");
  }
function redirect1() {
    window.open("https://drive.google.com/drive/folders/1S_Au7KVfQJsqs7bbdKEZwCc1vPgVE2ag?usp=drive_link", "_blank");
  }

function redirect2() {
    window.open("https://drive.google.com/drive/folders/1I2TnEuHW2AOMzhemCo7rx3YENWTaw7kP?usp=drive_link", "_blank");
}

function redirect3() {
    window.open("https://drive.google.com/drive/folders/19lUzeLMaV18y7HfpspxU7codNNqHFQT_?usp=drive_link", "_blank");
}


const textContent = `BPH 2024 - 2026

  Ketua : Rina Liska 

  Wakil : Michael Sitanggang 

  Sekretaris : Angelika Naibaho

  Bendahara : Elisabet Sijabat`;
const typingSpeed = 100; // Kecepatan mengetik (ms)
let charIndex = 0;
  
function typeContent() {
  if (charIndex < textContent.length) {
      // Tambahkan karakter satu per satu
    document.getElementById("typing-content").innerHTML += textContent.charAt(charIndex);
    charIndex++;
    setTimeout(typeContent, typingSpeed);
  } else {
      // Ganti (link) dengan tautan aktif setelah mengetik selesai
    const contentDiv = document.getElementById("typing-content");
    contentDiv.innerHTML = contentDiv.innerHTML
      .replace("Rina Liska", '<a href="https://www.instagram.com/rina_iska/" target="_blank">Rina Liska</a>')
      .replace("Michael Sitanggang", '<a href="https://www.instagram.com/thiskaell_/" target="_blank">Michael Sitanggang</a>')
      .replace("Angelika Naibaho", '<a href="https://www.instagram.com/_angelnb/" target="_blank">Angelika Naibaho</a>')
      .replace("Elisabet Sijabat", '<a href="https://www.instagram.com/elisabeth.sisilia/" target="_blank">Elisabet Sijabat</a>');
  }
}
  
document.addEventListener("DOMContentLoaded", typeContent);
  

  // Membuat observer untuk elemen dengan class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

const options = {
  root: null, // Menggunakan viewport sebagai root
  threshold: 0.1, // 10% elemen masuk ke dalam viewport
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Hentikan observasi setelah animasi muncul
    }
  });
}, options);

// Mulai mengamati elemen
fadeInElements.forEach(element => {
  fadeInObserver.observe(element);
});


  
// Fungsi untuk menambahkan kelas 'visible' pada elemen saat scroll
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);  // Tidak perlu mendeteksi lagi setelah elemen muncul
    }
  });
}

// Membuat observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5 // Ketika 50% elemen terlihat
});

// Menambahkan observer pada setiap elemen
const events = document.querySelectorAll('.event');
events.forEach(event => observer.observe(event));

const contactForm = document.querySelector('.contact form');
observer.observe(contactForm);  // Untuk form kontak
