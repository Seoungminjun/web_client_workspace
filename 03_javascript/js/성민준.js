
function submitForm() {
    var form = document.getElementById("mysign");
    var submissionMessage = document.getElementById("submissionMessage");

    submissionMessage.innerHTML = "";

    if (form.checkValidity()) {
        submissionMessage.innerHTML = "<p>회원가입이 제출되었습니다!</p>";
    } else {
        submissionMessage.innerHTML = "<p class='error-message'>필수 입력 항목입니다.</p>";
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password.length < 8 || password.length > 32) {
        passwordError.textContent = "영문자 대/소문자, 특수문자, 숫자 포함 8 ~ 32자여야 합니다.";
    }
};