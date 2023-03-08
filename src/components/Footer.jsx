import React from 'react';
import { socialLinks } from '../data';
import SocialLink from './SocialLinks';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 text-center">
            <h5 className="mb-3">Gracias por tu visita</h5>
            <p>"Apasionado por la tecnología. Comprometido con su éxito."</p>
            <hr className="border-light" />
            <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center">
            <h5 className="mb-3">Sígueme en redes sociales</h5>
            <div className="d-flex justify-content-center align-items-center">
              {socialLinks.slice(0, 3).map((link) => (
                <ul key={link.id} className="list-unstyled mx-3">
                  <SocialLink {...link} />
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
