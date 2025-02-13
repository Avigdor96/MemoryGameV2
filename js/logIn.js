  let users = JSON.parse(localStorage.getItem("users")) || {}
  function showLoginForm() {
    Swal.fire({
        title: 'התחברות',
        html:
            '<input type="text" id="userName" class="swal2-input" placeholder="שם משתמש">' +
            '<input type="password" id="password" class="swal2-input" placeholder="סיסמה">',
        confirmButtonText: 'התחבר',
        showCancelButton: true,
        cancelButtonText: 'ביטול',
        preConfirm: () => {
            const userName = document.getElementById('userName').value;
            const password = document.getElementById('password').value;
            if (!userName || !password) {
                Swal.showValidationMessage('אנא מלא את כל השדות');
                return false;
            }
            return { userName, password };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('שם משתמש:', result.value.userName);
            console.log('סיסמה:', result.value.password);
            Swal.fire('התחברת בהצלחה!', '', 'success');
        }
    })
}

  function showSignUpForm() {
    Swal.fire({
        title: 'הרשמה',
        html:
            '<input type="text" id="userName" class="swal2-input" placeholder="שם משתמש">' +
            '<input type="password" id="password" class="swal2-input" placeholder="סיסמה">'+
            '<input type="password" id="confirmPassword" class="swal2-input" placeholder="אימות סיסמה">',
            
        confirmButtonText: 'הירשם',
        showCancelButton: true,
        cancelButtonText: 'ביטול',
        preConfirm: () => {
            const userName = document.getElementById('userName').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (!userName || !password) {
                Swal.showValidationMessage('אנא מלא את כל השדות');
                return false;
            }
            if(!(password === confirmPassword)){
                Swal.showValidationMessage('הסיסמא אינה תואמת')
                return false;
            }
            return { userName, password };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let newUser = {name: result.value.userName, pass: result.value.password, score: 0, correct: 0, uncorrect: 0}
            users[result.value.userName] = newUser
            localStorage.setItem("users", JSON.stringify(users))
            
            Swal.fire('התחברת בהצלחה!', '', 'sucsses');
        }
    });
}