const FirstName = document.getElementById("txt_first_name");
const LastName = document.getElementById("txt_last_name");
const ContactNo = document.getElementById("txt_contact_no");
const Email = document.getElementById("txt_email");

function btnsubmit() {
    if (isValidate(All_inputEle, '') == false) {
        return
    }
    if (isValidate(All_inputEle, 'radio') == false) {
        return
    }

    alert('signup')
}


const mainDiv = document.getElementById('signup_sec')

//const All_inputEle = mainDiv.querySelectorAll('input:not([type="radio"])')
const All_inputEle = mainDiv.querySelectorAll('input:not([type="radio"])')



function isValidate(All_inputEle, flag) {
    debugger
    let valid = true;
    if (flag == 'radio') {
        // condition for checking radio button

    } else {
        All_inputEle.forEach(function (Curr_value, index) {

            if (Curr_value.value == '') {
                Curr_value.classList.add('border-danger')
                valid = false
            } else {
                Curr_value.classList.remove('border-danger')
                if (Curr_value.validationMessage != '') {
                    Curr_value.classList.add('border-danger')
                    Curr_value.nextElementSibling.innerHTML = Curr_value.validationMessage
                    valid = false
                } else {
                    Curr_value.nextElementSibling.innerHTML = ''
                }
            }

        })
    }
    return valid

}

