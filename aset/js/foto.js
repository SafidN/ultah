document.addEventListener('DOMContentLoaded', function() {
    const photoBox = document.getElementById('photoBox');
    const openLetterBtn = document.getElementById('openLetterBtn');
    const letter = document.getElementById('letter');
    const openGiftBtn = document.getElementById('openGiftBtn');
    const birthdaySong = document.getElementById('birthdaySong');
    const typedTextElement = document.getElementById('typedText');
    
    // Full letter content
    const fullLetterText = `

Hai ma👋🏻..... Selamat Ulang Tahun Yaaaa🎉

Hahaha ga kerasa padahal baru kemaren kamu belajar make up😅...... Sekarang udah 19 tahun aja.... Hahahaa berat banget yaa perjalanan dari 18 sampai 19 tahun nyaa.... Gimana rasanyaa .... Seneng, bahagia, atau banyak sedihnya???? Tapi itu dulu....

Sedikit cerita foto- foto waktu kecil kamuu itu aku minta ke ibu dan ga semuanya aku masukin.
Tujuan aku buat pasang foto itu bahwa proses kamu menuju saat ini emang ga mudah ya ma.... Banyak apresiasi buat kamu dari aku...
Kamu udah lewatin itu semua ma👏🏻.... Kamu hebat 🤙🏻.... Kamu kuat💪🏻.... Dan maaf jika disetiap kamu butuh aku gabisa hadir....  Ini ucapan dari aku.... Untuk doanya yaa semoga sehat, dipanjangkan umurnya dan diberikan keberkahan selama menjalani hidupnya..... Maaf gabisa hadir kesana... Dan maaf cuma bisa ngasih kayak gini...  HAPPY BIRTHDAY FOR MY FAVORITE PERSON🎂`;

    // Buka surat ketika tombol diklik
    openLetterBtn.addEventListener('click', function() {
        photoBox.style.display = 'none';
        letter.style.display = 'block';
        
        // Memainkan musik otomatis saat surat dibuka
        birthdaySong.play().catch(e => {
            console.log("Autoplay prevented: ", e);
            // Fallback untuk browser yang memblokir autoplay
            alert("Silakan klik di layar untuk memutar musik");
            document.body.addEventListener('click', function once() {
                birthdaySong.play();
                document.body.removeEventListener('click', once);
            });
        });
        
        // Start typing animation
        startTypingAnimation();
    });

    // Tombol hadiah
    openGiftBtn.addEventListener('click', function(e) {
        // Biarkan link bekerja secara normal
    });

    function startTypingAnimation() {
        const totalDuration = 317; // 5 minutes 17 seconds in seconds
        const totalCharacters = fullLetterText.length;
        const delayPerCharacter = (totalDuration * 1000) / totalCharacters;
        
        let i = 0;
        typedTextElement.innerHTML = '<span class="typed-cursor">|</span>';
        
        function typeWriter() {
            if (i < totalCharacters) {
                // Replace the cursor with the current text plus cursor
                typedTextElement.innerHTML = fullLetterText.substring(0, i+1) + '<span class="typed-cursor">|</span>';
                i++;
                setTimeout(typeWriter, delayPerCharacter);
            } else {
                // Remove cursor when finished
                typedTextElement.innerHTML = fullLetterText;
            }
        }
        
        typeWriter();
    }
});