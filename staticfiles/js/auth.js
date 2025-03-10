function toggleForm() {
    let title = document.getElementById("form-title");
    let form = document.getElementById("auth-form");
    let btn = form.querySelector("button");
    let toggleText = document.querySelector(".toggle-link");

    if (btn.textContent === "Login") {
        title.textContent = "Create an account";
        btn.textContent = "Sign Up";
        toggleText.textContent = "Login";
    } else {
        title.textContent = "Login to your account";
        btn.textContent = "Login";
        toggleText.textContent = "Sign up";
    }
}
