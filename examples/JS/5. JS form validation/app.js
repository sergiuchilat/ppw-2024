document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const password_repeat = document.getElementById('password_repeat').value;
        const email = document.getElementById('email').value;

        document.querySelector('.error').style.display = 'none';

        if (username === '') {
            document.getElementsByClassName('error')[0].style.display = 'block';
            
        }

        if (email === '') {
            document.getElementsByClassName('error')[1].style.display = 'block';
           
        }

        if (password === '') {
            document.getElementsByClassName('error')[2].style.display = 'block';
            
        }

        if (password_repeat === '') {
            document.getElementsByClassName('error')[3].style.display = 'block';
        }
    })
})