// Menangani perubahan gambar profil
document.getElementById('profile-pic-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-pic').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
// Mengambil data dari localStorage dan menampilkan di halaman profile
window.onload = function() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    // Menampilkan data di elemen yang sesuai
    if (username) {
        document.getElementById('username-display').textContent = username;
    }
    if (email) {
        document.getElementById('email-display').textContent = email;
    }
};

