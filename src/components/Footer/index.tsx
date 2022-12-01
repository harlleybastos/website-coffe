import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Nossas Sedes</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> Brazil{" "}
          </a>
        </div>

        <div className="box">
          <h3>Links Rapidos</h3>
          <a href="#home">
            {" "}
            <i className="fas fa-arrow-right"></i> Início{" "}
          </a>
          <a href="#about">
            {" "}
            <i className="fas fa-arrow-right"></i> Porque nos{" "}
          </a>
          <a href="#menu">
            {" "}
            <i className="fas fa-arrow-right"></i> Cardápio{" "}
          </a>
          <a href="#review">
            {" "}
            <i className="fas fa-arrow-right"></i> Avaliações{" "}
          </a>
          <a href="#partnership">
            {" "}
            <i className="fas fa-arrow-right"></i> Parceria{" "}
          </a>
        </div>

        <div className="box">
          <h3 className="normal-case">Informações de Contato</h3>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> +55 (19) 9 9-9990-9999{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> sunsetcoffee@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> Rio Claro, São Paulo = 13500-000{" "}
          </a>
        </div>

        <div className="box">
          <h3>Redes Sociais</h3>
          <a href="#">
            {" "}
            <i className="fab fa-facebook-f"></i> facebook{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-twitter"></i> twitter{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-twitter"></i> twitter{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-instagram"></i> instagram{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-linkedin"></i> linkedin{" "}
          </a>
        </div>
      </div>

      <div className="credit">
        {" "}
        Desenvolvido por{" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/harlley-bastos/"
            target={"_blank"}
          >
            Harlley Bastos
          </a>
        </strong>{" "}
        | Todos os Direitos Reservados{" "}
      </div>
    </section>
  );
};

export { Footer };
