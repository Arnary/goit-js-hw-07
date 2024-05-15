const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerLogin);

function handlerLogin(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
    if (email.value === "" || password.value === "") {
        alert("All form fields must be filled in");
    } else {
        const data = {};
        const formData = new FormData(event.currentTarget);

        formData.forEach((value, key) => data[key] = value.trim());
        console.log(data);
        form.reset();
    }
}
