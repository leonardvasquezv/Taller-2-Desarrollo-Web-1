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

  const guardarEmpleado = (e) => {
    e.preventDefault()

    if (!nombre.trim()) {
      alert('Digite el nombre')
      return
    }
    if (!cedula.trim()) {
      alert('Digite el cedula')
      return
    }
    if (!edad.trim()) {
      alert('Digite el edad')
      return
    }
    if (!email.trim()) {
      alert('Digite el email')
      return
    }
    if (!telefono.trim()) {
      alert('Digite el telefono')
      return
    }
    if (!tiempo.trim()) {
      alert('Digite el tiempo')
      return
    }
    if (!salario.trim()) {
      alert('Digite el salario')
      return
    }

    setListaEmpleados([
      ...listaEmpleados,

      { aNombre: nombre, aCedula: cedula, aEdad: edad, aEmail: email, aTelefono: telefono, aTiempo: tiempo, aSalario: salario }
    ])

    e.target.reset()
    setNombre('')
    setCedula('')
    setEdad('')
    setEmail('')
    setTelefono('')
    setTiempo('')
    setSalario('')

  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Administrar Empleados</h1>
      <hr />
      <form onSubmit={guardarEmpleado}>
        <input className="form-control mb-2" type="text" placeholder="Ingrese Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Cedula"
          onChange={(e) => setCedula(e.target.value)}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Edad"
          onChange={(e) => setEdad(e.target.value)}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Telefono"
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Tiempo"
          onChange={(e) => setTiempo(e.target.value)}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Salario"
          onChange={(e) => setSalario(e.target.value)}
        />
        <button className="btn btn-primary btn-block" type="submit">Agregar</button>
      </form>

      <div className="row mt-5">
        <div className="col-12">
          <h4 className="text-center">Listado de Empleados</h4>
          <ul className="list-group">
            {
              listaEmpleados.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <spam className="lead">{item.aNombre} - {item.aCedula} - {item.aEdad} - {item.aEmail} - {item.aTelefono} - {item.aTiempo} - {item.aSalario}</spam>
                  <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
                  <button className="btn btn-warning btn-sm float-end mx-2">Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
