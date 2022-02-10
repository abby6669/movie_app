import React from "react";
import Foto from "./logo.png";

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left " sty>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Super Movies</h5>
                <p>un clásico de los cinéfilos, podréis acceder al reparto de la película, a sus tráileres, su sinopsis, a una completa galería de imágenes y películas similares.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Enlaces</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Perfil</a></li>
                    <li><a href="#!">Login</a></li>
                    <li><a href="#!">Register</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <img class="rotate" src={Foto}/>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="#"> Devf G7</a>
    </div>

</footer>

export default Footer