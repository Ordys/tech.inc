document.addEventListener('DOMContentLoaded', function() {
    var userInfoContainer = document.getElementById('user-info-container');
    var loginButton = document.getElementById('login-button');
    var logoutButton = document.getElementById('logout-button');

    if (userInfoContainer && loginButton && logoutButton) {
        
        var firstName = localStorage.getItem('firstName');
        var lastName = localStorage.getItem('lastName');

        if (firstName && lastName) {
            
            userInfoContainer.textContent = firstName + ' ' + lastName;
            userInfoContainer.style.display = 'block';
            
            logoutButton.style.display = 'block';
            loginButton.style.display = 'none';
        } else {
            
            userInfoContainer.style.display = 'none';
            logoutButton.style.display = 'none';
            
            loginButton.style.display = 'block';
        }
    }
});


function logout() {
    
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    
    location.reload();
}
