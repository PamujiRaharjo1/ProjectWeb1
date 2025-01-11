function checkAnswers() {
    // Jawaban benar untuk 10 soal
    const correctAnswers = {
        q1: "B", // Question 1
        q2: "B", // Question 2
    };

    // Jumlah total soal
    const totalQuestions = 2;

    // Inisialisasi skor
    let score = 0;

    // Loop untuk memeriksa semua jawaban
    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        const result = document.getElementById(`result${i}`);

        if (answer) {
            if (answer.value === correctAnswers[`q${i}`]) {
                result.textContent = "Correct!";
                result.style.color = "green";
                score++;
            } else {
                result.textContent = `Wrong! Correct answer: ${correctAnswers[`q${i}`]}`;
                result.style.color = "red";
            }
        } else {
            result.textContent = "Please select an answer!";
            result.style.color = "orange";
        }
    }

    // Konversi skor ke persentase
    const percentageScore = (score / totalQuestions) * 100;

    // Tampilkan score ke dalam popup
    const scoreValue = document.getElementById("scoreValue");
    scoreValue.textContent = `${percentageScore}/100`;

    const scoreGif = document.getElementById("scoreGif");
    if (percentageScore >= 80) {
        document.getElementById('happyGif').style.display = 'block';
        document.getElementById('sadGif').style.display = 'none'; // GIF animasi kemenangan
    } else {
        document.getElementById('sadGif').style.display = 'block';
        document.getElementById('happyGif').style.display = 'none'; // GIF animasi sedih (gunakan GIF lain sesuai preferensi)
    }

    // Tampilkan popup
    const popup = document.getElementById("scorePopup");
    popup.style.display = "flex";
}
function closePopup() {
    const popup = document.getElementById("scorePopup");
    popup.style.display = "none";
}