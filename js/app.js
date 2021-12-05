import Validator from "./Validator";

const btn = document.querySelector("button[data-button='addUser']");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const user = new Validator(document.getElementById("addUserForm"));
    user.info();
    user.showFields();
});
