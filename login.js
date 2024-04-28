document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    fetch('data.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки файла CSV: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            var rows = data.split('\n');
            var credentials = {};
            rows.forEach(row => {
                var columns = row.split(',');
                if (columns.length >= 4) { 
                    var login = columns[0].trim();
                    var pass = columns[1].trim();
                    var firstName = columns[2].trim();
                    var lastName = columns[3].trim();
                    credentials[login] = { password: pass, firstName: firstName, lastName: lastName };
                }
            });

            if (credentials.hasOwnProperty(username) && credentials[username].password === password) {
                var fullName = credentials[username].firstName + ' ' + credentials[username].lastName;
                localStorage.setItem('firstName', credentials[username].firstName);
                localStorage.setItem('lastName', credentials[username].lastName);
                window.location.href = 'index.htm';
            } else {
                document.getElementById('login-error').textContent = 'Неверный логин или пароль.';
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла CSV:', error);
        });
});
