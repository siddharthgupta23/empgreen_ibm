

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm) {
         loginForm.addEventListener('submit', (event) => {
             event.preventDefault();
             const email = document.getElementById('email').value;
             const password = document.getElementById('password').value;
           let valid = true;
           clearErrors();
        
           if (!validateEmail(email)) {
                showError('emailError', 'Please enter a valid email.');
                 valid = false;
            }
        
            if (!validatePassword(password)) {
               showError('passwordError', 'Password must be at least 6 characters long.');
                valid = false;
           }
           function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            if (errorElement) {
                errorElement.textContent = message;
            }
        }
    
        function clearErrors() {
            const errorElements = document.querySelectorAll('.error');
            errorElements.forEach(el => el.textContent = '');
        }
        
        
if (valid) {
    redirectToHome();
           }
      });
     }
     function redirectToHome() {
      
        window.location.href = 'indeeeex.html'; 
      } 

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            let valid = true;
            clearErrors();

            if (username.length < 3) {
                showError('usernameError', 'Username must be at least 3 characters long.');
                valid = false;
            }

            if (!validateEmail(email)) {
                showError('signupEmailError', 'Please enter a valid email.');
                valid = false;
            }

            if (!validatePassword(password)) {
                showError('signupPasswordError', 'Password must be at least 6 characters long.');
                valid = false;
            }

            if (password !== confirmPassword) {
                showError('confirmPasswordError', 'Passwords do not match.');
                valid = false;
            }

            if (valid) {
             
                redirectToHome();
                
            }
        });
    }
   
        

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
    // function redirectToLogin() {
      
    //     window.location.href = 'login.html'; 
    //   } 
    //   function showError(elementId, message) {
    //     const errorElement = document.getElementById(elementId);
    //     if (errorElement) {
    //         errorElement.textContent = message;
    //     }
    // }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => el.textContent = '');
    }
    


});

const chartData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
        label: 'Users (millions)',
        data: [120, 180, 250, 300, 400, 550],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};


const ctx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    },
    
});



// const avg = document.getElementById('wind-chart').getContext('2d');
// const chart = new Chart(avg, {

// });

// function updateChartData() {
//     const windSpeeds = [15, 10, 20]; // Replace with actual data
//     chart.data.datasets[0].data = windSpeeds;
//     chart.update();
//   }
  
//   // Call updateChartData function every 10 seconds
//   setInterval(updateChartData, 10000);

