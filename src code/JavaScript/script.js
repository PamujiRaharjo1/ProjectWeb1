document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        console.log("Showing slide:", index); // Cek apakah fungsi dipanggil dengan benar
        currentSlide = index;
        const offset = -index * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    const slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 2000);
    dots.forEach((dot, index) => {
        dot.onclick = () => {
            showSlide(index); // Tampilkan slide yang sesuai
        };
    });
    
    // Sign up
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.onsubmit = function(event) {
            event.preventDefault(); // Mencegah pengiriman form default

            const username = document.querySelector('input[type="text"]').value;
            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            // Simpan ke local storage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password); // Jangan simpan password secara langsung dalam produksi

            // Tampilkan pesan sukses
            alert("Pendaftaran berhasil! Anda sekarang bisa login.");

            // Arahkan ke halaman login
            window.location.href = "login.html";
        };
    }

    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = function(event) {
            event.preventDefault(); // Mencegah pengiriman form default

            const username = document.querySelector('input[type="text"]').value;
            const password = document.querySelector('input[type="password"]').value;

            // Ambil data dari local storage
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            // Cek kredensial
            if (username === storedUsername && password === storedPassword) {
                alert("Login successful!");
                // Arahkan ke dashboard atau halaman utama
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password!");
            }
        };
    }
});
