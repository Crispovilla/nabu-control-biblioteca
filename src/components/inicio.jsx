import React from "react";
import "../App.scss";

const Inicio = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div class="jumbotron">
          <h2 className="display-6">Nabuk App!</h2>
          <p className="lead">
            Nabuk - Tu solución para el control de pedidos de la biblioteca.
          </p>
          <hr class="my-4" />
          <p>Pedidos rápidos y eficientes en la palma de tu mano.</p>
          <p className="lead">
            <button
              className="buttons btn btn-primary btn-lg"
              type="submit"
              href="#"
              role="button"
            >
              Saber más
            </button>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Inicio;
