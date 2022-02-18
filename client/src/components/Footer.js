import React from "react";
import { Link } from "react-router-dom";
import Foto from "./logo.png";

const Footer = () => <footer className="page-footer font-small blue pt-4 text-light">
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">ULTRA MOVIE APP</h5>
                <p>Un clásico de los cinéfilos, podrás dar like a las películas que más te gusten y conocer a personas con tus mismos intereses.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Páginas</h5>
                <ul className="list-unstyled">
                    <li as={Link} to="/"><a className="text-light" >Home</a></li>
                    <li><a className="text-light" as={Link} to="/profile" >Perfil</a></li>
                    <li><a className="text-light" as={Link} to="/login">Login</a></li>
                    <li><a className="text-light" as={Link} to="/register" >Register</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <img className="rotate" src={Foto} alt=""/>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="#"> Devf G7</a>
    </div>

</footer>

export default Footer