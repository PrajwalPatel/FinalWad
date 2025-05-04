document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Collect the data from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        const user = { name, email, password };
  
        // Retrieve existing users from local storage or initialize an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Add the new user to the array
        users.push(user);
        
  
        // Save the updated users list back to local storage
        localStorage.setItem('users', JSON.stringify(users));
  
        // Simulating an AJAX POST request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/submitRegistration', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(user));
  
        // Simulate success response from server
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('Registration successful!');
                registrationForm.reset();
            } else {
                alert('Error in registration.');
            }
        };
    });
  });
  
  