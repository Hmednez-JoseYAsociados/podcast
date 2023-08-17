document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const userForm = document.getElementById('userForm');

    submitBtn.addEventListener('click', function () {
        const formData = new FormData(userForm);
        
        fetch('process.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            alert(message); 
            userForm.reset(); 
        })
        .catch(error => console.error('Error:', error));
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const userInfo = document.getElementById('userInfo');

    searchBtn.addEventListener('click', function () {
        const searchValue = searchInput.value;

        // Fetch data of the matching user
        fetch(`process.php?users=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            userInfo.innerHTML = `<p>User: ${data.User}</p>
                                  <p>Name: ${data.name}</p>
                                  <p>Email: ${data.email}</p>
                                  <p>Phone: ${data.phone}</p>`;
        })
        .catch(error => console.error('Error:', error));
    });
});

