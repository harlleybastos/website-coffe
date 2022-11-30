import React from "react";
import Image from "../../assets/img/image/about-img.png";
import AboutIconOne from "../../assets/img/image/about-icon-1.png";
import AboutIconTwo from "../../assets/img/image/about-icon-2.png";
import AboutIconThree from "../../assets/img/image/about-icon-3.png";
import SugarICon from "../../assets/img/image/sugar.png";
import ProteinIcon from "../../assets/img/image/protein.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading text-[9rem] text-uppercase text-transparent stroke-slate-500 traking-[.2rem] text-center pointer-events-none relative">
        {" "}
        Sobre nós{" "}
        <span className="absolute text-[3rem] text-[#443] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          porque nos escolher
        </span>{" "}
      </h1>

      <div className="row flex items-center flex-wrap gap-[1.5rem]">
        <div className="image flex-content">
          <img
            src={Image}
            alt=""
            className="w-full animate-[image_4s_linear_infinite]"
          />
        </div>

        <div className="content flex-content">
          <h3 className="title text-[#443] text-[3rem] leading-[1.8]">
            Oque faz o nosso café especial ?
          </h3>
          <p className="text-[#443] text-[1.5rem] leading-[1.8] py-[1rem] px-0 normal-case">
            Nos da Sunset coffee buscamos fazer os nossos produtos com paixão,
            para você se apaixonar por cada detalhe. Buscamos alcançar a
            excelência em tudo oque fazemos, garantindo qualidade superior não
            apenas no produto, mas em todo processo de produção, incluindo
            qualidade de vida. Acreditamos na sofisticação por meio da
            simplicidade, naturalidade e na autenticidade. Nos queremos ter o
            prazer de você descobrir e degustar a melhor esperiencia de café com
            proteína.
          </p>
          <div className="icons-container">
            <div className="icons">
              <img src={AboutIconOne} alt="" />
              <h3 className="normal-case">Café de Categoria Especial</h3>
            </div>
            <div className="icons">
              <img src={SugarICon} alt="" />
              <h3>Sem adição açucares</h3>
            </div>
            <div className="icons">
              <img src={ProteinIcon} alt="" />
              <h3>Proteina de Valor Biologico</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
