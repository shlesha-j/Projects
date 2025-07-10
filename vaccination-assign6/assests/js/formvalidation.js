document.addEventListener('DOMContentLoaded', function () {
    let nameField = document.getElementById('uName');
    let numberField = document.getElementById('nikNumber');
    let fullName = document.getElementById('fname');
    let mobileField = document.getElementById('mobile');
    let emailfield = document.getElementById('email');
    let sentBtn = document.querySelector('.float-btn');
    let submitBtn = document.querySelector('.submitBtn');

    const rules = {
        fname: {
            regex: /^[a-zA-Z\s]{3,}$/, emptyMsg: "Name is required", invalidMsg: "Name must be at least 3 letters"
        },
        email: {
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, emptyMsg: "Email is required", invalidMsg: "Email is invalid"
        },
        mobile: {
            regex: /^[6-9]\d{9}$/, emptyMsg: "Mobile Number Required", invalidMsg: "Enter a valid mobile number"
        },
    }

    function alphabetOnly(inputElement) {
        inputElement.addEventListener("input", function () {
            this.value = this.value.replace(/[^a-zA-Z]/g, "");
        });
    }

    alphabetOnly(nameField);
    alphabetOnly(fullName);

    function numberOnly(inputElement) {
        inputElement.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, '');

        });
    }
    numberOnly(numberField);
    numberOnly(mobileField);

    function validateField(field, rule) {
         const fieldError = document.querySelector(`.error[for="${field.id}"]`);
        // const fieldError = document.querySelector('.error');
        // const fieldError = field.nextElementSibling;
        const value = field.value.trim();

        if (value === "") {
            fieldError.innerHTML = `*${rule.emptyMsg}`;
            fieldError.classList.add('visible');
            return false;
        } else if (!rule.regex.test(value)) {
            fieldError.innerHTML = `*${rule.invalidMsg}`;
            fieldError.classList.add('visible');
            return false;
        } else {
            fieldError.innerHTML = "";
            fieldError.classList.remove('visible');
            return true;
        }
    }


    if(sentBtn) {
        sentBtn.addEventListener('click', function (e) {
            e.preventDefault();
            validateField(emailfield, rules.email);
        });
    }

    if(submitBtn){
        submitBtn.addEventListener('click', function(e){
            e.preventDefault();
            validateField(fullName, rules.fname);
            validateField(mobileField, rules.mobile);
        })
    }
});


