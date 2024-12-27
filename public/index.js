document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('submitForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        let isValid = true;

        // Helper function:
        function resetError(input, errorSpan) {
            input.addEventListener('input', function () {
                input.style.border = '';
                input.style.backgroundColor = '';
                errorSpan.textContent = '';
            });
        }

        // Validation Name:
        const name = document.getElementById('name');
        const nameError = document.getElementById('msg-error');
        
        if (!name.value.trim()) {
            name.style.border = '1px solid red';
            name.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            nameError.textContent = 'Name is required';
            nameError.style.color = 'red';
            nameError.style.fontSize = '15px';
            isValid = false;

        } else {
            name.style.border = '';
            nameError.textContent = '';
        }
        resetError(name, nameError);


        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error')
        
        
        if (!email.value.trim()) {
            email.style.border = '1px solid red';
            email.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            emailError.textContent = 'Adress email is required';
            emailError.style.color = 'red';
            emailError.style.fontSize = '15px';
            isValid = false;

        } else {
            email.style.border = '';
            emailError.textContent = '';
        }
        resetError(email, emailError);


        const role = document.getElementById('role');
        const roleError = document.getElementById('role-error');
        
        
        if (!role.value.trim()) {
            role.style.border = '1px solid red';
            role.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            role.style.color = 'white';
            roleError.textContent = 'Please select one of the folowing options';
            roleError.style.color = 'red';
            roleError.style.fontSize = '15px';
            isValid = false;

        } else {
            role.style.border = '';
            roleError.textContent = '';
        }
        resetError(role, roleError);


        const def = document.getElementById('definitely');
        const recoError = document.getElementById('recommend');
        

        if (!def.value.trim()) {
            roleError.textContent = 'Please select one of the folowing options';
            roleError.style.color = 'red';
            roleError.style.fontSize = '15px';
            isValid = false;

        } else {
            roleError.textContent = '';
        }

        
        if (isValid) {
            const formData = {
                name: name.value,
                email: email.value,
                role: role.value,
            }
        };

        try {
            const response = await fetch("/api/v1/survey", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert("Form submitted successfully!");
                form.reset();
                console.log(result);
            } else {
                const errorResult = await response.json();
                alert("Failed to submit the form! " + errorResult.message);
            } 
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("There was an error submitting the form.");
        }
    });
})