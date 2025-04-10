import React from "react";

export default function FichaPersonal({ nombre, cargo, departamento, autenticado }) {
  if (!autenticado) {
    return <p>No tienes acceso a esta información.</p>;
  }

  return (
    <div className="App">
      <h1>Ficha de Personal</h1>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Cargo:</strong> {cargo}</p>
      <p><strong>Departamento:</strong> {departamento}</p>
    </div>
  );
}
