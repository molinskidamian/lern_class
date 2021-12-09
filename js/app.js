import Validator from "./Validator";

const db = [];
const aggregate = {
    id: 1,
    type: "KLU2",
    serialNumber: "13_21/2021",
    electricalCabinet: false,
    eCSerialNumber: "",
};

const btn = document.querySelector("button[data-button='addUser']");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const user = new Validator(document.getElementById("addUserForm"));
    user.saveUser();

    if (window.localStorage.length != 0) {
        user.showUsersTable();
        console.log(user.db);
    }
});
