//Login

const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }

    console.log(data)
})