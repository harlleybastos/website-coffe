import React from "react";

const Contact = () => {
  return (
    <section className="book" id="partnership">
      <h1 className="heading text-[9rem] uppercase text-transparent stroke-slate-500 traking-[.2rem] text-center pointer-events-none relative">
        {" "}
        Parceria{" "}
        <span className="absolute text-[3rem] text-[#443] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          Seja um parceiro
        </span>{" "}
      </h1>

      <form action="">
        <input type="text" placeholder="Seu nome" className="box" />
        <input type="email" placeholder="Seu e-mail" className="box" />
        <input type="number" placeholder="Seu número" className="box" />

        <textarea
          name=""
          placeholder="Sua mensagem"
          className="box"
          id=""
          cols={30}
          rows={10}
        ></textarea>

        <input disabled type="submit" value="Enviar mensagem" className="btn" />
      </form>
    </section>
  );
};

export { Contact };
