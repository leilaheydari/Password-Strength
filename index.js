const pass = document.getElementById("pass");
const mes = document.getElementById("mes");
const str = document.getElementById("str");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        mes.style.display = 'block'
    }
    else {
        mes.style.display = 'none';
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        mes.style.color = 'red';
        pass.style.borderColor = 'red';
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        mes.style.color = 'yellow';
        pass.style.borderColor = 'yellow';
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        mes.style.color = 'green';
        pass.style.borderColor = 'green';
    }
})