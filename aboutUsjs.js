window.onload = () => {
    // Retrieve the user data from local storage and parse it into an array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const registeredUsersList = document.getElementById('registered-users');

    // Loop through the users and display their information
    for (let i = 0; i < users.length; i++){
        const user = users[i];
        const username = user.firstname.charAt(0) + user.lastname + i; // to make it unique
        
        // Create a new list item for the user
        const li = document.createElement('li');
    
        // Set the content of the list item
        li.innerHTML = `${user.firstname} ${user.lastname} - ${username}`;

        // Add the list item to the registered members list
        registeredUsersList.appendChild(li);
    }
}