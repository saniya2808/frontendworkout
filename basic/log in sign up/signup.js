document.querySelector('.signup-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]:nth-child(1)').value;
    const confirmPassword = document.querySelector('input[type="password"]:nth-child(2)').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
    } else {
        // You can replace this with your own code for user registration and validation
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        alert('User registered successfully!');
    }
});
