function submitForm(){
    // Get the form and submit button elements
    const form = document.querySelector('form');
    const submit = document.querySelector('#submit');

    // Add event listener to submit button
    submit.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the user input values
        const FirstNameInput = document.querySelector('#firstname').value;
        const LastNameInput = document.querySelector('#lastname').value;
        const AgeInput = document.querySelector('#age').value;
        const DOBInput = document.querySelector('#DOB').value;
        const GenderInput = document.querySelector('input[name="gender"]:checked').value;
        const EmailInput = document.querySelector('#Email').value;
        const AddressInput = document.querySelector('#Address').value;
        const ContactInput = document.querySelector('#Contact').value;
        const ExperienceInput = document.querySelector('#experience').value;
        const OtherInput = document.querySelector('#other').value;
        const ExperienceObject = {experience: ExperienceInput, other: OtherInput};
        const PasswordInput = document.querySelector('#Password').value;
        const Password2Input = document.querySelector('#Password2').value;
        const checkboxInput = document.querySelectorAll('input[name="event"]:checked');
        const EventInput = [];
        checkboxInput.forEach(checkbox => {
            EventInput.push(checkbox.value);
        });

/*
        if (!FirstNameInput || !LastNameInput || !AgeInput || !DOBInput || !GenderInput || !EmailInput || !AddressInput || !ContactInput || !ExperienceInput || !PasswordInput || !Password2Input) {
            swal('Please fill in all fields');
            return;
        }
*/
        function register(){
            const confirmation = `Please confirm your information:\n\n
                            Name: ${FirstNameInput} ${LastNameInput}\n
                            Age: ${AgeInput} years\n
                            Date of Birth: ${DOBInput}\n
                            Gender: ${GenderInput}\n
                            Email: ${EmailInput}\n
                            Address: ${AddressInput}\n
                            Contact: ${ContactInput}\n
                            Experience: ${ExperienceInput} ${OtherInput}\n`;
            
            swal({
                    title: "Confirm Details",
                    text: confirmation,
                    icon: "info",
                    buttons: true,
                    dangerMode: false,}).then((willSubmit) => {
                    // If the user confirms, store the information in local storage
                    if (willSubmit) {
                        const userObject = {
                            firstname: FirstNameInput,
                            lastname: LastNameInput,
                            age: AgeInput,
                            DOB: DOBInput,
                            gender: GenderInput,
                            Email: EmailInput,
                            Address: AddressInput,
                            Contact: ContactInput,
                            experience: ExperienceObject,
                            password: PasswordInput,
                            password2: Password2Input,
                            event: EventInput
                        };
            
                        // Get the existing user data from local storage
                        const users = JSON.parse(localStorage.getItem('users')) || [];

                        // Add the current user data to the array
                        users.push(userObject);

                        // Save the updated user data array to local storage
                        localStorage.setItem('users', JSON.stringify(users));  

                        form.reset(); // reset the form
                    }
            });
        };
    register();
    });
}



