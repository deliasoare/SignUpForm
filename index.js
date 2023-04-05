const inputs = document.querySelectorAll('input');

const patterns = {
    firstName: /[A-Za-z]{3}/,
    lastName: /[A-Za-z]{3}/,
    email: /^\w{2,}@\w{3,}\.[a-z]{3,}$/i,
    phone: /^\d{10}$/,
    pass: /^(?=.*[A-Z])[\w]{8,}$/,
    confirmPass: '/^(?=.*[A-Z])[\w]{8,}$/'
}
inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        if (input.parentElement.querySelector('span'))
            input.parentElement.querySelector('span').remove();

        if (input.id === "pass") {
            if (document.querySelector('#confirmPass').value !== input.value) {
                if (document.querySelector('#confirmPass').parentElement.querySelector('span'))
                    document.querySelector('#confirmPass').parentElement.querySelector('span').remove();

                const span2 = document.createElement('span');
                span2.textContent = 'Passwords must match.';
                document.querySelector('#confirmPass').className = 'invalidInput';
                span2.className = 'invalid';
                document.querySelector('#confirmPass').parentElement.append(span2);
            }
        }
        if (input.id !== 'confirmPass') {
            if(patterns[input.id].test(input.value) === false) {
                const span = document.createElement('span');
                if (input.id === "firstName" || input.id === "lastName") {
                    span.textContent = 'Must have minimum 3 letters.'
                }
                else if (input.id === "email")
                    span.textContent = 'Enter a valid email (e.g. example@gmail.com)';
                else if (input.id === "phone")
                    span.textContent = 'The telephone number must have 10 digits!'
                else if (input.id === "pass") {
                    span.textContent = 'The password must be 8 characters long and contain one uppercase letter.'
                    
                }
                input.className = 'invalidInput';
                span.className = 'invalid';
                input.parentElement.append(span);
                }
            else {
                input.className = 'validInput';
            }
        }
        else  { 
            const span = document.createElement('span');
            if (input.value !== document.querySelector('#pass').value) {
                span.textContent = 'Passwords must match.';
                span.className = 'invalid';
                input.parentElement.append(span);
            }
            else {
                input.className = 'validInput';
            }
        }

        });
    })
