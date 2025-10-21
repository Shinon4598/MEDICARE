import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useId } from "react";

function Input({ texto = "default", icono, tipo = "text" }) {
  const [valueLabel, setValueLabel] = useState(texto);
  const id = useId();
  const idPersonalizado = `${id}_${texto
    .trim()
    .toLowerCase()
    .replace(" ", "_")}`;
  return (
    <div className="relative">
      <label
        className="absolute text-gray-500 top-1/2 -translate-y-1/2 left-[1rem]"
        htmlFor={idPersonalizado}
      >
        {" "}
        <FontAwesomeIcon icon={icono} className="mr-2 text-gray-500" />
        {valueLabel}
      </label>
      <input
        onChange={(e) => {
          !!e.target.value ? setValueLabel("") : setValueLabel(texto);
        }}
        className="border border-gray-300 rounded-[15px] py-2 pl-10 shadow"
        type={tipo}
        name={idPersonalizado}
        id={idPersonalizado}
      />
    </div>
  );
}

export default Input;
