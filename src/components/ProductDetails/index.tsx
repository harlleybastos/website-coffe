import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItems } from "../../constants";

const ProductDetails = () => {
  let { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const item = MenuItems[Number(productId)];

  return (
    <section className="w-full md_secondary:py-[10rem] h-full items-center  flex flex-col md_secondary:flex-row w-ful justify-around">
      <div className="md_secondary:w-1/3 sm:mt-28 sm_secondary:mt-28 flex justify-center">
        <img
          src={item.imageSource}
          alt={item.firstText}
        />
      </div>
      <div className="bg-slate-100 sm:mt-12 sm_secondary:mt-12 sm_secondary:w-full sm:w-full rounded-lg max-h-[40rem]">
        <h1 className="text-4xl p-10">{item.firstText}</h1>
        <p className="text-2xl p-10">{item.secondText}</p>
        <p className="p-10 text-4xl mt-10 text-[#886125] flex flex-col">
          <strong>{item.price}</strong>
          <span className="text-lg">no pix com 5% de desconto</span>
        </p>

        <div className="h-12 m-5 flex justify-center items-center gap-4">
          <input
            type="number"
            className="h-full text-xl rounded-md border-gray-400 text-center"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target?.value))}
          />
          <button
            disabled
            className="h-full uppercase w-[20rem] bg-orange-400 rounded-md"
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
};

export { ProductDetails };
