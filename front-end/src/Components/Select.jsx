import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useId } from "react";

function Select({ name = "", icono, children }) {
  const id = useId();
  const idPersonalizado = `${id}_${name
    .trim()
    .toLowerCase()
    .replace(" ", "_")}`;
  return (
    <div className="relative w-full">
      <div className="relative w-[100%]">
        <label
          className="absolute text-gray-500 top-1/2 -translate-y-1/2 left-[1rem]"
          htmlFor={idPersonalizado}
        >
          {" "}
          <FontAwesomeIcon icon={icono} className="mr-2 text-gray-500" />
        </label>
        <select
          {...registerProps}
          className="text-gray-500  border border-gray-300 rounded-[15px] py-3 pl-10 shadow w-[100%]"
          name={name}
          id={idPersonalizado}
        >
          {children}
        </select>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 break-words max-w-full overflow-hidden">
          {error}
        </p>
      )}
    </div>
  );
}

export default Select;
