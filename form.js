document.getElementById('feedbackForm').addEventListener('submit', function(event) {
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

    console.log('Form Submission Data:', feedback);
    alert('Thank you for your feedback!');

    this.reset();
});
