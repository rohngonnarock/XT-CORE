let getValues = (form) => {
    return {
        email: form['email'].value,
        password: form['inputPassword'].value,
        address: form['inputAddress'].value,
        address2: form['inputAddress2'].value,
        gender: form['inlineRadioOptions'].value,
        city: form['inputCity'].value,
        state: form['inputState'].value,
        zip: form['inputZip'].value,
        isDefault: form['isDefault'].checked
    };

}

let init = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        let formData = {};
        e.preventDefault();
        if (document.forms['myForm'].checkValidity()) {
            formData = getValues(document.forms['myForm'])
        } else {
            alert('check validation')
            let form = document.forms['myForm'].elements;
            for (let index = 0; index < form.length; index++) {
                const element = form[index];
                if (!element.checkValidity()) {
                    document.forms['myForm'].className += " was-validated"
                }
            }
        }
        console.log(JSON.stringify(formData))
    })
}
window.onload = init