document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('accessForm');
    const modal = document.getElementById('errorModal');
    const closeBtn = document.querySelector('.close');
    const errorMessage = document.getElementById('errorMessage');

    // Correct credentials
    const correctName = "Rahma Fadilah";
    const correctBirthdate = "2006-06-16"; // Format YYYY-MM-DD

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name').value.trim();
        const birthdateInput = document.getElementById('birthdate').value;
        
        if (nameInput === correctName && birthdateInput === correctBirthdate) {
            // Redirect to next page (replace with your actual link)
            window.location.href = "foto.html";
        } else {
            // Show error message
            if (nameInput !== correctName && birthdateInput !== correctBirthdate) {
                errorMessage.textContent = "Salah Woiiiii";
            } else if (nameInput !== correctName) {
                errorMessage.textContent = "Nah tanggalnya bener!";
            } else {
                errorMessage.textContent = "Namanya doang yang bener!";
            }
            modal.style.display = "block";
        }
    });

    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});