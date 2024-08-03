const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById('reach').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const feedback = {};

    formData.forEach((value, key) => {
        if (feedback[key]) {
            if (!Array.isArray(feedback[key])) {
                feedback[key] = [feedback[key]];
            }
            feedback[key].push(value);
        } else {
            feedback[key] = value;
        }
    });

  
    alert('Your request has been submitted. We will contact you soon');

    this.reset();
});