class Validator {
    constructor(form) {
        this.form = form;
        this.fields = this.form.querySelectorAll("input");
        this.errors = [];
        this.db = [];
    }

    info = () => {
        console.log("Pobrano dane!");
    };

    showFields = () => {
        const requiredFields = [...this.fields]; // create for true array
        console.log(`--- .showFiles() ---`);

        requiredFields.forEach((el, index) => {
            console.log(`${el.name}: ${el.value}`);
        });
    };

    saveUser = () => {
        this.fields = [...this.fields];

        // if (this.fields[0].value != "") {
        //     console.log(`Uzupełniono --- Tworzę obiekt`);
        //     const user = {};
        // } else {
        //     console.log("Nie uzupełniono --- Nie mogę utworzyć obiektu");
        // }

        const user = {};

        for (let i = 0; i < this.fields.length; i++) {
            user[this.fields[i].name] = this.fields[i].value;
            // console.log(`${this.fields[i].name}: ${this.fields[i].value}`);
        }

        this.db.push(user);
    };

    showUsersTable = () => {
        console.log(`--- .showUsersTable() ---`);
        console.log(this.db);

        const usersTable = document.querySelector("table[data-users='table']");
        usersTable.classList.add("table-success", "table-striped");

        // const tr = document.createElement("tr");
        // const td = document.createElement("td");
        // const email = document.createTextNode("damianmolinski@gmail.com");

        // td.appendChild(email);
        // tr.appendChild(td);
        // usersTable.appendChild(tr);

        console.log(this.db.length);

        console.log(usersTable);
    };
}

export default Validator;
