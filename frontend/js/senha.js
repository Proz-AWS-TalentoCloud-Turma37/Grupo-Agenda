function alternarSenha() {
    const senhaInput = document.getElementById("senha");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}

document.getElementById("showPassword").addEventListener("click", alternarSenha)