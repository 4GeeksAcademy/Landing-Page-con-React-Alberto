import React from "react";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark bg-opacity-75">
            <div className="container-fluid">
              {/* Marca alineada a la izquierda */}
              <a className="navbar-brand text-light" href="#">Start Bootstrap</a>

              {/* Botón para la navbar responsive */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Contenido de la barra de navegación */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Uso de ms-auto para alinear estos elementos a la derecha */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
</nav>
    );
};

export default Navbar;