class Validator {
    constructor(form) {
        this.form = form;
        this.fields = this.form.querySelectorAll("[required]");
        this.errors = [];
    }

    info = () => {
        console.log("Pobrano dane!");
    };

    showFields = () => {
        const requiredFields = [...this.fields]; // create for true array
        requiredFields.forEach((el) => {
            console.log(el.value);
        });
    };
}

export default Validator;
