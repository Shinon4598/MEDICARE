import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useId } from "react";

function Input({
  label = "default",
  name = "",
  icono,
  tipo = "text",
  register,
  error,
}) {
  const [valueLabel, setValueLabel] = useState(label);
  const id = useId();
  const idPersonalizado = `${id}_${name
    .trim()
    .toLowerCase()
    .replace(" ", "_")}`;

  // Verificar que register existe y es una función
  const registerProps = register ? register(name) : {};
  return (
    <div className="relative w-full">
      <div className="relative w-[100%]">
        <label
          className="absolute text-gray-500 top-1/2 -translate-y-1/2 left-[1rem]"
          htmlFor={idPersonalizado}
        >
          {" "}
          <FontAwesomeIcon icon={icono} className="mr-2 text-gray-500" />
          {valueLabel}
        </label>
        <input
          {...registerProps}
          onChange={(e) => {
            !!e.target.value ? setValueLabel("") : setValueLabel(label);
          }}
          className="border border-gray-300 rounded-[15px] py-2 pl-10 shadow w-[100%]"
          type={tipo}
          name={name}
          id={idPersonalizado}
        />
      </div>
      {error && (
        <div className="w-full min-h-[20px] mt-1">
          <p className="text-red-500 text-sm break-words whitespace-normal w-full">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}

export default Input;
