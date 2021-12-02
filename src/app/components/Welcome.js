export const Welcome = () => {
  // todas las variables que hacen referencia a elementos del dom le anteponemos el símbolo del dolar
  const $welcome = document.createElement("div");
  $welcome.classList.add("welcome");

  $welcome.innerHTML = `<div class="logo-container">
    <div class="logo"></div>
    <h3 class="logo-name">Yami</h3>
  </div>

  <div class="eslogan">
    <h2>¿Listo para una aventura culinaria?</h2>
  </div>

  <div class="inputs-container">
    <form class="form" action="/action_page.php">
      <div class="form__input-container">
        <input
          class="form__input"
          type="text"
          id="lname"
          name="lname"
          placeholder="Correo electrónico"
        />
      </div>

      <input
        class="form__input"
        type="text"
        id="fname"
        name="fname"
        placeholder="Contraseña"
      />
      <br />
    </form>

    <a class="link" href="/#">Olvidé mi contraseña</a><br />

    <div class="btn" href="/#timeline">
      <span>Ingresar</span>
    </div>
    <br />
    <div class="btn-g" href="/#nada">
      <span>Ingresar con Google</span>
    </div>
    <br />
  </div>
  `;

  return $welcome;
};