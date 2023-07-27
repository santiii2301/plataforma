function validarCredenciales(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores ingresados en los campos de usuario y contraseña
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("password").value;

  // Validar las credenciales y redirigir según el caso
  if (usuario === "profesor123" && contrasena === "123456") {
    window.location.href = "../interfaz_maestro/materias/index.html";
  } else if (usuario === "estudiante123" && contrasena === "123456") {
    window.location.href = "../interfaz_estudiante/index.html";
  } else {
    alert("Credenciales inválidas. Inténtalo nuevamente.");
  }
}


