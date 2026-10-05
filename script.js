const formularioRegistro = document.getElementById("formRegistro");
const mensajeRegistro = document.getElementById("mensajeRegistro");
const campoNombre = document.getElementById("nombre");

formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault();
    mensajeRegistro.textContent = `¡${campoNombre.value.trim()}, te has registrado correctamente!`;
});