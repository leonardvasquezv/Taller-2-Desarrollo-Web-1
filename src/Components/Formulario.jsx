import React from "react";
import { nanoid } from "nanoid";
import swal from "sweetalert"
import { firebase } from './firebase'

const Formulario = () => {
  const [nombre, setNombre] = React.useState("");
  const [cedula, setCedula] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [tiempo, setTiempo] = React.useState("");
  const [salario, setSalario] = React.useState("");
  const [id, setId] = React.useState("")
  const [listaEmpleados, setListaEmpleados] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore()
        const data = await db.collection('empleados').get()
        const arrayData = data.docs.map(doc => (
          { id: doc.id, ...doc.data() }
        ))
        //console.log(arrayData)
        setListaEmpleados(arrayData)
      } catch (error) {

      }
    }
    obtenerDatos();
  })

  const guardarEmpleado = async (e) => {
    e.preventDefault()

    if (!nombre.trim()) {
      setError('Digite el nombre')
      return
    }
    if (!cedula.trim()) {
      setError('Digite la cedula')
      return
    }
    if (!edad.trim()) {
      setError('Digite la edad')
      return
    }
    if (!email.trim()) {
      setError('Digite el email')
      return
    }
    if (!telefono.trim()) {
      setError('Digite el telefono')
      return
    }
    if (!tiempo.trim()) {
      setError('Digite el tiempo')
      return
    }
    if (!salario.trim()) {
      setError('Digite el salario')
      return
    }

    try {
      swal({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado',
        showConfirmButton: false,
        timer: 700
      })
      const db = firebase.firestore()
      const nuevoEmpleado = {
        aNombre: nombre, aCedula: cedula, aEdad: edad, aEmail: email, aTelefono: telefono, aTiempo: tiempo, aSalario: salario
      }
      await db.collection('empleados').add(nuevoEmpleado)

      setListaEmpleados([
        ...listaEmpleados,
        { id: nanoid(), aNombre: nombre, aCedula: cedula, aEdad: edad, aEmail: email, aTelefono: telefono, aTiempo: tiempo, aSalario: salario }
      ])

      e.target.reset()
      setNombre('')
      setCedula('')
      setEdad('')
      setEmail('')
      setTelefono('')
      setTiempo('')
      setSalario('')
      setError(null)

    } catch (error) {
      console.log(error)
    }
  }

  const editar = item => {
    setId(item.id)
    setNombre(item.aNombre)
    setCedula(item.aCedula)
    setEdad(item.aEdad)
    setEmail(item.aEmail)
    setTelefono(item.aTelefono)
    setTiempo(item.aTiempo)
    setSalario(item.aSalario)
    setModoEdicion(true)
    setError(null)
  }

  const editarEmpleado = async e => {
    e.preventDefault()

    if (!nombre.trim()) {
      setError('Digite el nombre')
      return
    }
    if (!cedula.trim()) {
      setError('Digite la cedula')
      return
    }
    if (!edad.trim()) {
      setError('Digite la edad')
      return
    }
    if (!email.trim()) {
      setError('Digite el email')
      return
    }
    if (!telefono.trim()) {
      setError('Digite el telefono')
      return
    }
    if (!tiempo.trim()) {
      setError('Digite el tiempo')
      return
    }
    if (!salario.trim()) {
      setError('Digite el salario')
      return
    }

    try {
      const db = firebase.firestore()
      await db.collection('empleados').doc(id).update({
        aNombre: nombre, aCedula: cedula, aEdad: edad, aEmail: email, aTelefono: telefono, aTiempo: tiempo, aSalario: salario
      })
      const arrayEditado = listaEmpleados.map(
        item => item.id === id ? { id: id, aNombre: nombre, aCedula: cedula, aEdad: edad, aEmail: email, aTelefono: telefono, aTiempo: tiempo, aSalario: salario } : item
      )
      setListaEmpleados(arrayEditado)
      setId('')
      setNombre('')
      setCedula('')
      setEdad('')
      setEmail('')
      setTelefono('')
      setTiempo('')
      setSalario('')
      setModoEdicion(false)
    } catch (error) {
      console.log(error)
    }
  }

  const eliminar = id => {
    swal({
      title: '¿Estás seguro?',
      text: "No podrás deshacer esta acción.",
      icon: 'warning',
      buttons: ["No", "Sí"]
    }).then(async (result) => {
      if (result) {
        try {
          const db = firebase.firestore()
          await db.collection('empleados').doc(id).delete()
          const aux = listaEmpleados.filter(item => item.id !== id)
          setListaEmpleados(aux)
        } catch (error) {
          console.log(error)
        }
        swal({
          position: 'top-end',
          icon: 'success',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 700
        })
      }
    })
  }

  const cancelar = () => {
    setModoEdicion(false)
    setId('')
    setNombre('')
    setCedula('')
    setEdad('')
    setEmail('')
    setTelefono('')
    setTiempo('')
    setSalario('')
    setError(null)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Administrar Empleados</h1>
      <hr />
      <form onSubmit={modoEdicion ? editarEmpleado : guardarEmpleado} className="text-center">
        {
          error ? <span className="text-danger">{error}</span> : null
        }
        <input className="form-control mb-2" type="text" placeholder="Ingrese Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Cedula"
          onChange={(e) => setCedula(e.target.value)}
          value={cedula}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Edad"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Telefono"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Tiempo (meses)"
          onChange={(e) => setTiempo(e.target.value)}
          value={tiempo}
        />
        <input className="form-control mb-2" type="text" placeholder="Ingrese Salario"
          onChange={(e) => setSalario(e.target.value)}
          value={salario}
        />
        {
          modoEdicion ?
            (
              <>
                <button className="btn btn-warning btn-block" type="submit">Editar</button>
                <button className="btn btn-dark btn-block" onClick={() => cancelar}>Cancelar</button>
              </>
            )
            :
            <button className="btn btn-primary btn-block" type="submit">Agregar</button>
        }

      </form>

      <div className="row mt-5">
        <div className="col-12">
          <h4 className="text-center">Listado de Empleados</h4>
          <ul className="list-group">
            {
              listaEmpleados.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.aNombre} - {item.aCedula} - {item.aEdad} - {item.aEmail} - {item.aTelefono} - {item.aTiempo} - {item.aSalario}</span>
                  <button className="btn btn-danger btn-sm float-end mx-2" onClick={() => eliminar(item.id)}>Eliminar</button>
                  <button className="btn btn-warning btn-sm float-end mx-2" onClick={() => editar(item)}>Editar</button>
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
