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



const signinEle = document.getElementById('signin_sec')
function links_d(_this) {
    const flag = _this.getAttribute('data-current')

    let disply_title = ""

    console.log(_this.getAttribute('data-current'))
    if (flag === 'signin') {
        mainDiv.classList.remove('d-none')
        signinEle.classList.add('d-none')
        _this.setAttribute('data-current', 'signup')
        disply_title = "Already have a account? Signin here"

    } else {
        mainDiv.classList.add('d-none')
        signinEle.classList.remove('d-none')
        _this.setAttribute('data-current', 'signin')
        disply_title = "Create New Account"
    }

    _this.innerHTML = disply_title


}


//------------------------------------------
//----------------SignIn--------------------
const email = document.getElementById('sign_txt_email')
const Password = document.getElementById('sign_txt_Password')
function SignIn() {
    const params = {
        email: email.value,
        Contactno: Password.value,
    }


    fetchData("/newUser/SignIn", params).then((data) => {
        if (data.Table.length == 0) {
            AlertModel(0)
            location
        } else {
            AlertModel(1)
            location.href = "/Dashbord/Index"
        }

    })


}


function AlertModel(alertMsg) {

    const className = alertMsg == 1 ? 'alert-success' : 'alert-danger';
    const Title = alertMsg == 1 ? 'SignIn Success' : 'Email And Password invalid!';

    const alertEle = `<div id="alert_message" class="alert ${className} d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
        <use xlink: href="#exclamation-triangle-fill" /></svg>
        <div>
        ${Title}
        </div>
        </div>`

    document.body.insertAdjacentHTML("beforeend", alertEle)

    setTimeout(() => {
        document.getElementById('alert_message').remove()
    }, 3000)


}