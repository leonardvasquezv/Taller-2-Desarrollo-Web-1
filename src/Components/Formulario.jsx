import React from "react";

const Formulario = () => {
  const [nombre, setNombre] = React.useState("");
  const [cedula, setCedula] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [tiempo, setTiempo] = React.useState("");
  const [salario, setSalario] = React.useState("");
  const [listaEmpleados, setListaEmpleados] = React.useState([])

  const guardarEmpleado = () => {
    setListaEmpleados([
      {aNombre: nombre, aCedula: cedula, aEdad: edad, aEmail: email, aTelefono: telefono, aTiempo: tiempo, aSalario: salario}
    ])
  }

  return (
    <div className="container mt-5">
      <h2>Empleados</h2>
      <form onSubmit={guardarEmpleado}>
        <input className="form-control mb-2" type="text" placeholder="Ingrese Nombre" />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Cedula" />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Edad" />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Email" />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Telefono" />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Tiempo" />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Salario" />
        <button className="btn btn-primary btn-block" type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Formulario;
