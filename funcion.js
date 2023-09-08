const URL = "https://jsonplaceholder.typicode.com/users";
const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener los valores de los campos del formulario
  const uNombre = document.getElementById("nombre").value;
  const uApellido = document.getElementById("apellido").value;
  const uFecha = document.getElementById("fechaNacimiento").value;

  const usuario = {
    name: uNombre,
    surname: uApellido,
    bornDate: uFecha,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1, // Cambiado userTd a userId
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8", // Corregido el typo en Content-Type
    },
  })
    .then((response) => response.json()) // Corregido ison() a json()
    .then((json) => {
      console.log(json);
      document.getElementById("respuesta").textContent = JSON.stringify(json, null, 2);
    });
});

